

const BOARD_STRING = "00000111111000011111110001111111100111111111011111111111111111111111111111110111111111001111111100011111110000111111000000000000";

const ATOM_STRING = "00000000000000001111100000111111000011101110001101101100111111111001101101100011101110000111111000001111100000000000000000000000"

const WIDTH = 1000;
const HEIGHT = 850;

let atom_field;

let selected_hexes = [];

let gamemode;

class AtomType {
    constructor(name = null, color = "#000"){
        this.name = name
        this.color = color
        this.img = new Image();
        this.img.src = './symbols/'+name+".svg"
    }
    glyph_path(){
        return './symbols/'+this.name+".svg"
    }
}

class Variant {
    constructor(hex_compat = null, atom_compat = null, is_selectable = null, board_gen = null, post_click = null){
        this.hex_compat = hex_compat
        this.atom_compat = atom_compat
        this.is_selectable = is_selectable
        this.board_gen = board_gen
        this.post_click = post_click
    }
}

function RandomInt(max, min=0) {
  return Math.floor(Math.random() * (max - min) + min);
}

function drawShape(x, y, r, sides) {
  ctx.translate(x, y);
  for (let i = 0; i < sides; i++) {
    const rotation = ((Math.PI * 2) / sides) * i;
    if (i === 0) {
      ctx.moveTo(r * Math.cos(rotation), r * Math.sin(rotation));
    } else {
      // for the rest draw a line
      ctx.lineTo(r * Math.cos(rotation), r * Math.sin(rotation));
    }
  }
  ctx.closePath();
  ctx.fillStyle = "#BBB"
  ctx.fill();
  ctx.resetTransform();
}

function drawCircle(x,y,r,color){
    ctx.beginPath();
    ctx.arc(x,y,r, 0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function hex_selected(r,q,hexlist=selected_hexes){
    for (const h of hexlist){ if (h[0] == r && h[1] == q) {return true;}}
    return false;
}

function get_atom(h){
    return atom_field[h[0]][h[1]];
}

function blendColors(colorA, colorB, amount) {
  const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
  const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
  const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
  const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
  const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
  return '#' + r + g + b;
}

function remove(list, element){

    let index = -1

    for (let i = 0; i < list.length; i++){
        if (JSON.stringify(list[i]) == JSON.stringify(element)){
            index = i;
            break;
        }
    }

    if (index > -1) {
        list.splice(index, 1); // Only removes the first 'banana'
    }  
}

function hex_equals(h1, h2){
    return h1[0] == h2[0] && h1[1] == h2[1]
}

async function load_bitboard_data(){

    const response = await fetch('./solitaire-bitboards.bin')
    const blob = await response.blob()
    const bytes = await blob.bytes()
    return blob
}

const bitboard = load_bitboard_data();

const SALT = new AtomType("salt", "#aa9988")
const FIRE = new AtomType("fire", "#ee6633")
const EARTH = new AtomType("earth", "#55bb55")
const AIR = new AtomType("air", "#99ccff")
const WATER = new AtomType("water", "#3399aa")
const VITAE = new AtomType("vitae", "#eeaaaa")
const MORS = new AtomType("mors", "#333333")
const QS = new AtomType("quicksilver", "#888899")
const LEAD = new AtomType("lead", "#445555")
const TIN = new AtomType("tin", "#666655")
const IRON = new AtomType("iron", "#884433")
const COPPER = new AtomType("copper", "#dd6622")
const SILVER = new AtomType("silver", "#888888")
const GOLD = new AtomType("gold", "#eedd33")

const ATOMTYPES = [SALT, FIRE, EARTH, AIR, WATER, VITAE, MORS, QS, LEAD, TIN, IRON, COPPER, SILVER, GOLD]
const METALS = [LEAD, TIN, IRON, COPPER, SILVER, GOLD]
const CARDINALS = [SALT, FIRE, EARTH, AIR, WATER]

const ADJACENTS = [[0,1],[-1,1],[-1,0],[0,-1],[1,-1],[1,0]]

function hexIsChoosable(h, marbleHexes){
    let valids = []
    for (let i = 0; i < 12; i++){
        let offset = ADJACENTS[i%6];
        if (!hex_selected(h[0]+offset[0], h[1]+offset[1], marbleHexes)){
            valids.push(0)
        } else { valids.push(1) }
    }
    return valids.some((num, i) => num === 0 && valids[i + 1] === 0 && valids[i + 2] === 0);
}

const VANILLA = new Variant(
    hex_compat = function(h1, h2) { return true; },
    atom_compat = function(a1, a2) {


        if (a1 == VITAE && a2 == MORS || a1 == MORS && a2 == VITAE) { return true; }
        if (CARDINALS.includes(a1) && a1 == a2) { return true; }
        if (a1 == SALT && CARDINALS.includes(a2) || a2 == SALT && CARDINALS.includes(a1)) { return true; }
        if (METALS.includes(a1) && a2 == QS || METALS.includes(a2) && a1 == QS) { return true; }
        if (a1 == a2 && a1 == GOLD) { return true; }
        return false;
    },
    is_selectable = function(h) {
        let valids = []
        for (let i = 0; i < 12; i++){
            let offset = ADJACENTS[i%6];
            if (atom_field[h[0]+offset[0]][h[1]+offset[1]] == null){
                valids.push(0)
            } else { valids.push(1) }
        }
        has_empty_spot = valids.some((num, i) => num === 0 && valids[i + 1] === 0 && valids[i + 2] === 0);

        let my_atom = atom_field[h[0]][h[1]];

        if (my_atom == null) { return false; }

        if (METALS.includes(my_atom) && my_atom != LEAD){
            let prevAtom = METALS[METALS.indexOf(my_atom)-1]
            if (atom_field.some(row => row.includes(prevAtom))) {return false;}
        }


        return has_empty_spot
    },
    board_gen = function(){

        let new_board = Array.from({ length: 11 }, () => Array(11).fill(null));
        let center = [5,5]

        let boardGenerated = false;
        let moveHistory = []

        let marbleHexes = [];

        let mirrorBoard = RandomInt(2) == 0;

        let boardID = RandomInt((bitboard.length-4)/16)*16+4

        for (let i = 0; i < 16; i++)
        {
            let boardByte = bitboard[boardID + i];
            for (let j = 0; j < 8; j++)
            {
                if (boardByte%2 == 1)
                {
                    let num = i * 8 + j;
                    // add hex
                    let q = Math.floor(num / 11);
                    let r = (num % 11);
                    if (mirrorBoard)
                    {
                        q += r;
                        r = -r;
                    }
                    marbleHexes.push([q,r])
                }
                boardByte = boardByte >> 1;
            }
        }

		while (marbleHexes.length > 0)
		{
			// find all marbles that could be chosen for the next move
			let choosableMarbles = marbleHexes.filter(x => hexIsChoosable(x,marbleHexes) && (x[0] != x[1] || x[0] != 5));
			// choose the next move
			if (choosableMarbles.length >= 2)
			{
				// choose a random pair of marbles to be the next move
				let marbleA;
                let marbleB;
				marbleA = choosableMarbles[RandomInt(choosableMarbles.length)];
				remove(choosableMarbles, marbleA); // don't accidentally choose A again when choosing B!
				marbleB = choosableMarbles[RandomInt(choosableMarbles.length)];
				moveHistory.push([marbleA, marbleB]);
                remove(marbleHexes,marbleA);
                remove(marbleHexes,marbleB);
			}
			else if (hexIsChoosable(center))
			{
				// only option is to choose Gold as our next move
				moveHistory.push([center,center])
				remove(marbleHexes, center)
			}
			else
			{
			}
		}

		// reverse the list, so moveHistory[0] is the LAST move made to solve the board
		moveHistory.reverse();
		
		// generate "marble bags" that store the moves to be made
        let saltlikeBag = []
        let metalBag = []

		// put animismus matches in the saltlikeBag
		for (let i = 0; i < 4; i++)
		{
			saltlikeBag.push([VITAE, MORS]);
		}
		let cardinals = [ 4, 8, 8, 8, 8 ]; // salt, air, water, fire, earth

		// put salt matches in the saltlikeBag
		while (cardinals[0] > 0)
		{
			cardinals[0] -= 2;
			let match = RandomInt(5);
			if (match == 0)
			{
				saltlikeBag.push([SALT, SALT]);
			}
			else
			{	
				cardinals[match] -= 2;
				saltlikeBag.push([SALT, CARDINALS[match]]);
				saltlikeBag.push([SALT, CARDINALS[match]]);
			}
		}

		// put the remaining cardinal matches in the saltlikeBag
		for (let i = 1; i < 5; i++)
		{
			while (cardinals[i] > 0)
			{
				cardinals[i] -= 2;
				saltlikeBag.push([CARDINALS[i], CARDINALS[i]]);
			}
		}

        //One of each metal on the board
        // we need to insert them in order, since we must solve them in order!
        for (let i = 4; i >= 0; i--)
        {
            metalBag.push([METALS[i], QS])
        }

		// "unsolve" the board by using the move history in reverse to place marbles

		let placedGold = false;
		for (let m = 0; m < moveHistory.length; m++)
		{
			var [hex1, hex2] = moveHistory[m];

			if (hex_equals(hex1, hex2))
			{
				// the Gold match!
				new_board[center[0]][center[1]] = GOLD
				placedGold = true;
			}
            else {
                // otherwise, a regular match
                let pick = RandomInt(saltlikeBag.length + metalBag.length);
                if (!placedGold)
                {
                    pick = RandomInt(saltlikeBag.length);
                }
                let match;
                if (pick < saltlikeBag.length)
                {
                    match = saltlikeBag[pick];
                    remove(saltlikeBag, match);
                }
                else
                {
                    match = metalBag[0];
                    remove(metalBag,match)
                }
                new_board[hex1[0]][hex1[1]] = match[0];
                new_board[hex2[0]][hex2[1]] = match[1];
            }
		}

		// tada! randomized board
		return new_board;
    },
    post_click = function(h){
        if (selected_hexes.length == 0){

            if (this.is_selectable(h)) { 
                if (get_atom(h) == GOLD) {
                    atom_field[h[0]][h[1]] = null;
                    myGameArea.drawAtoms();
                }
                else {
                    selected_hexes.push(h);
                    myGameArea.drawAtoms();
                }
            }
        }
        else if (selected_hexes.length == 1){

            if (hex_selected(h[0],h[1])) {
                selected_hexes = []
                myGameArea.drawAtoms();
            }

            else if (this.is_selectable(h)){
                if (this.atom_compat(get_atom(h), get_atom(selected_hexes[0]))) {
                    atom_field[h[0]][h[1]] = null;
                    atom_field[selected_hexes[0][0]][selected_hexes[0][1]] = null;
                }
                selected_hexes = []
                myGameArea.drawAtoms();
            }
        }
    }

)

function startGame() {
    myGameArea.start();
}

function screenPosition(r, q, canvas){
    return [80*(q-5)+40*(r-5)+Math.round(canvas.width/2),69*(r-5) + Math.round(canvas.height/2)];
}

const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d");

let myGameArea = {
    start : function() {
        gamemode = VANILLA
        atom_field = gamemode.board_gen()
        selected_hexes = []

        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        document.body.insertBefore(canvas, document.body.childNodes[0]);
        this.clear();
        this.drawAtoms();
    },

    clearHex : function(r,q){
        let atomPosition = screenPosition(r, q, canvas);
        drawCircle(atomPosition[0],atomPosition[1],40,"#DDD")
    },

    clear : function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawShape(WIDTH/2, HEIGHT/2, 475 ,6)

        for (let i = 0; i < 16; i++)
        {
            for (let j = 0; j < 8; j++)
            {
                let num = i * 8 + j;
                if (BOARD_STRING[num] == "1")
                {
                    // add hex
                    let q = Math.floor(num / 11);
                    let r = (num % 11);
                    
                    this.clearHex(r,q);

                }
            }
        }

    },
    drawAtoms : function(){

        this.clear()
        for (let q = 0; q < 11; q++){
            for (let r = 0; r < 11; r++){   
                if (atom_field[r][q] != null){

                    let currentAtom = atom_field[r][q];
                    let atomPosition = screenPosition(r, q, canvas);

                    if (hex_selected(r,q)) { drawCircle(atomPosition[0], atomPosition[1], 40, "#FFD")}
                    
                    let color = gamemode.is_selectable([r,q], atom_field) ? currentAtom.color : blendColors(currentAtom.color,"#FFFFFF",13/16);
                    drawCircle(atomPosition[0],atomPosition[1],33,color)

                    ctx.globalAlpha = gamemode.is_selectable([r,q], atom_field) ? 1 : 5/16;
                    ctx.drawImage(currentAtom.img, atomPosition[0]-30, atomPosition[1]-30)
                    ctx.globalAlpha = 1;
                }
            }   
        }

    }
}

function circleFromHex(x,y){

    for (let q = 0; q < 11; q++) {
        for (let r = 0; r < 11; r++){   

            let atomPosition = screenPosition(r, q, canvas);
            let distanceX = x - atomPosition[0];
            let distanceY = y - atomPosition[1];
            let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            if (distance <= 33) {
                return [r,q]
            }

        }
    }

    return null
}

canvas.addEventListener('click', function(event){

    const rect = canvas.getBoundingClientRect();
    
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    let location = circleFromHex(mouseX, mouseY)

    if (location != null){
        gamemode.post_click(location)
    }

}, false)