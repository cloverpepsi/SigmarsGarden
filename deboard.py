import base64


with open('solitaire-bitboards.bin', 'rb') as f:
    binary_data = f.read()
    bitstring = [f'{byte:08b}'[::-1] for byte in binary_data][4:]

    print(len(bitstring)//16, binary_data[1]*(2**8)+binary_data[0])

    has_seen = []

    with open('output.txt', 'w') as f2:
        for x in range(1024):
            add_str = ''.join(bitstring[x*16:(x+1)*16])
            if add_str not in has_seen:
                has_seen.append(add_str)
                bit_integer = int(add_str, 2)
                actual_bytes = bit_integer.to_bytes(16, byteorder="big")
                base64_bytes = base64.b64encode(actual_bytes)
                base64_string = base64_bytes.decode("utf-8")
                f2.write(base64_string+"\n")