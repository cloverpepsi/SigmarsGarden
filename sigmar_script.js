const BITBOARDS = "B+GMXpRVC8noVRS9GMPwAA== AeEYYxxl9evX0xxjDEPAAA== B+GMUpKUY//jFKSlGMPwAA== AcB4HgbB+P87Z/z/AMAAAA== BMDoKQvj9L7n5+hJD8IAAA== AQBgH5/j+H8P4/z8AwBAAA== AEH4Pwqi1u+6Y/hmD8EAAA== AgD8JQ+m/L6fsvhSH4AgAA== AEH4Owvjluu04+huD8EAAA== ACD4Kw/jvfqV4+heD4AQAA== AAD4Pw7jbP+bY7h+D4AAAA== BCD4Nw0i/d3folh2D4IQAA== B8B8DQNHsJp999zLEcIgAA== B+CYZQlz1Yz+lFSLH8KQAA== BCD4Nw+inevcovh2D4IQAA== B8DQMg/hTG/2tKT/HkIAAA== AwD8IQ/n3K6WsuzaH4AgAA== BCD4KQvj9b7X4+hKD4IQAA== B+EoRx8HIf/CcHxxCkPwAA== B+H8YZg2B4jwNgzDH8PwAA== ACEEfp71/38LQfA8BgHwAA== AIHwDp/h2m6e5/hfCgFAAA== AgD8LQ9n3I6e89haH4AgAA== AgHEeJv19j+H8eBoHgHgAA== ACD4F5fDaf+forh+CYBQAA== BAH8VQfXSq/eorh6CYOgAA== BADkPwvntHvN4/hsDwIgAA== BQFgfA3x/j1P43z4BgOAAA== AAD4Nw+i/P+fovh2D4AAAA== AEH4JQ+i/r6/ovhSD8EAAA== A+A4LgbBvfo5V/yfFMAQAA== B+EUZJUU/xx/lFSTFEPwAA== ACGEX513+12PwVA8CwHwAA== AEH4Nw6ibv+7Irh2D8EAAA== BwHgfAeQ3i/O8/zwHAOAAA== B+FEX5RXC0lodRT9EUPwAA== AcFwNgbB/n87Jvz/BEEAAA== ACEcR5+2+/4fgPAWA4HwAA== AcBQWg/x+H835eT/AkCAAA== A8CQcgvx9H+3lOSvHkCAAA== AAD4Pw1j/N2f41h+D4AAAA== B4DgH55jSE/Kd5z9GwJAAA== B+EUZJeUnyp8lPSTFEPwAA== BcDQGgfB+H/35eT/CEIAAA== AoBwGp/h+H8X9+h/EgBAAA== A+A4D5KC8f47V/yHEcBQAA== BAGEV5/3an/PgLA8CwPgAA== BIHwTg7xunrZZ/hfCgOAAA== AEH4LQ/jnqq84/haD8EAAA== A+A8B4fxtF0Wx/DwHgPgAA== AIA8Cx/i/d3fo/xoHgCAAA== BAH0eZZX3g/SY8h6DQPgAA== AQB4HwfD+P8f4/z+AYAAAA== BCD4LQ1j/Zzf41haD4IQAA== BCD4Lwyi/fzbY3hWD4IQAA== AEH4LQ7jbr67Y7haD8EAAA== A8CQfgXRvHm91XS/HECAAA== B4BwH55jSE9ad5z/EwJAAA== AEBYfQ9z/J8/4dB6B8CAAA== A+BcCwHH8fw39WTPEcAwAA== A+A4Dwqi8f47V/yHE8AQAA== AIA8Ow3n/P0Xx2g/B4AgAA== AgB8DZ/n2K4e8/haE4BgAA== ACD4L5njZfyf4zhOD4BQAA== AeBQFp9h+V8/pNT/AkBQAA== AKH0apn1J3iV5yhPDgHwAA== AgD8Nw0m/N2fslh2H4AgAA== AIAQfw/z/H8fxfA/BwCAAA== AcB8FwfHKPs9prz/AcAgAA== AgD8LQ1n/Jyf81haH4AgAA== AAA8f5NX9N8fw9guBYDgAA== AoB8HwdHaN8f95h/EYAgAA== AEH4Mwui9v+3ouhmD8EAAA== AAD4Pw/jnOuc4/h+D4AAAA== B8BwFgbB+H97Nvz/EEIAAA== BED8OQ5n3I/yY8h6D8IgAA== AQFgP5vj1m8O4/zsBwFAAA== BIDwPw6i3G/aZ/h3DwIAAA== AQB8Hx7ivH8eo7x8HwBAAA== AkD4PwzjLPm5czh+H8AAAA== AeDoGgfBaf+n56z9CMAQAA== ASBoPgfB/f8P4/z8BIAQAA== AAE8S5+2+v4Xw+gWA4HgAA== ACH4KwXD//yX42heDYEQAA== AQBgVJ/1f6r/V/yVAwBAAA== ACEMbp/1b/4PwbAcBoHwAA== AEBQfg/x/H8/4fB+BkCAAA== BADwPg9h/F/f49h+DgIAAA== AAD4Lp/hvPqd4/heDoBAAA== AOAsT5r3sfopR/gNA8DwAA== A8CIPQ8i/J+v1dSxH8AAAA== BIDkPw+mLHvN57h1DwIgAA== A+BwHAeA+T8/9/zzEEAQAA== AgH4Zh+G4f/DsPwzD8AgAA== B8FgeJcQvhtl98zxFEPAAA== BADwdg/xvHvdovh+DgKAAA== BCCMM57n/f/DAOA8D4JwAA== AEAQfp/x/H8/wfA+BkDAAA== BCGEcJf31ZzV9/SHEMIQAA== AoDgOJ/h/D+H9+h5HgBAAA== B+CIE5fDKfvllKS9GcJQAA== AQB8Pwjn9P0bY3zuB4AgAA== AIA8D5/n2O4ex/gfA4BgAA== BEGcVZ82ap//gJAyC8PgAA== AAD4LQ/j/L6f4/haD4AAAA== A8B4DwOC8P4/9/zHEcAAAA== AEH4Nw+inuu8ovh2D8EAAA== AQBkH5+m+H8P4/z0AwBgAA== A8DIcQvzZL+ntKTpH8CAAA== BQEkZJ/1/j5PgvyYBgPgAA== AgDIfg/xbP+P8bB8HoCAAA== BACEX5+2+H/PwfA0CwLgAA== B+EkSJv1kypk1+yJEkPwAA== AAE8Kw/n/v4Xw+geB4EgAA== AEEQfp/xvns9wfA+BkHAAA== B8D4HwMCQM/+95znGcIAAA== B+B4GgeAKft196z3EMIQAA== AEH4Nw0i/t2/olh2D8EAAA== BAGUU573+n/TAOA+CwPgAA== BCD4LQ/jnarc4/haD4IQAA== BCD4Nw6ibf/bIrh2D4IQAA== AEBYH53j+P0/4XB+A8BAAA== AeB8GpXFKfk15yz/AMBwAA== ACAMfp91/d8PwdA8BoDwAA== A+B8CYMz+ypv5mDIHwPgAA== ACCIP57j/f+LQfA8D4BQAA== AECoPw+i/P+vw/g0D8AAAA== AeAwegfRbX83x6y/BECQAA== AiDEeZ/3LTuF8aB4HwDwAA== AgDwPwvjtHud8/huHwAAAA== AEH4OwrjZv+zY6huD8EAAA== ByHEeJn1JznF8SToHgPwAA== BAEcZZfX/r5fgPAaBYPgAA== BQGkf5s2Rk/Ow5ykDwPgAA== B+BgWA/xSS9m96z5EkKQAA== BwDgPA/hbD/P87z4HgIAAA== ASE8S5NX894Xw8yOAYHwAA== AEEcPwXH/v0/wXA+BcEgAA== AACAf4/j+uuv4/j/AIAAAA== AQBgP5/j3G8O4/z8BwBAAA== AAB8XJ/1aL8f47h6AoDgAA== A8B4fQsyRI8+95zjF8CAAA== B8CgPArh9D/rV/ypHkIAAA== AUBwdA/x/D8/ovz6BkCAAA== BAGAX5+y+n/PwfA0CwPAAA== AICwPw7j/H+bR/g/DwAAAA== BIDwF51j+F3fplh/CwJAAA== BCFMa5XXv/hF4WBcBYPwAA== B4FQOgdB/l9X9cT/FAMAAA== ByDoFgbB+f/LMvz8GIIQAA== AiD4Pwqi1e+ac/hmH4AQAA== AAH8Z5HX1uyeonhODYHgAA== AeA4Dw9jad4/x5yfA8AQAA== BiHEf5i2J3nJcTBkHwPwAA== AIHgD57j+n6LZ/hdCwFAAA== AgCQPp/h/H+f0fA+HgBAAA== AGEUZJ/1/z4/gPAaBkHwAA== AOE8SZp3854zR8gLA8HwAA== A8BoHQ+i2K8u9/zxE8AAAA== AeBIGwfD+f8n5eT9AcAQAA== BwC8HQNH8J/f09yqGYIgAA== B+GgVJOQ0y/ulvyhGEPQAA== ACEAf5fT/38PwfA8BQHQAA== AeE4PQ0iv5k9x1yzB8EQAA== B8DwGgTB+H3zd2z/GEIAAA== B+GMUpOUk+vklOSlGMPwAA== AIAkeZ/3/D8Hx+g5BwDgAA== AIHwG5dD+l+X58h/CQFAAA== ASBsHwbH+f8LY/z8AYAwAA== ACA8B5/n+f4fgvgeA4BwAA== B4DwXhNEef/PEWQ9B4DwAA== AQA8fJ+03K8ew/yyBoDgAA== BSHMUp60a//DIKT0CoPwAA== B+GUJ4lyU5zlJ0jyFMPwAA== AgHAPw3j/n2P8XB8HwEAAA== AqCkOYvT85zn5ejOEoKgAA== A+BoDwPD0e4u9/zNEcAQAA== AcBsHwXHuPkt53z9AcAgAA== A+BQD5HD8Xw/9XTPEUBQAA== AiBMG5fH+f8H8eB8EYBwAA== BAHwbAvx9j7f4/hKDgOAAA== AAHweg9x/l+X48h+DgGAAA== AgB4fwrz1O8ac/huF4CAAA== BCD4Mwui9f/XouhmD4IQAA== AIA8T5+22O4ex/gXA4DgAA== ACH4Nw2ib/2fojh2D4EQAA== AUHwFgfB+n+/ovz+CEEAAA== B4CQHgvh8H/f1fSvGgIAAA== AiDYLw3jvfid8XBeH4AQAA== AIHwPgbB/n+bZ/h/DAEAAA== AGD4GgfB+f+34+h+CMAQAA== B4DQGwfDaH/X9aT/GQIAAA== B+EEQJ+0+z5nlOSREkPwAA== BICwPwui9H/fx/gnDwIAAA== AgDgPw3j/H2P83h8HwAAAA== AeBgHwXl/N2f09B8AwPAAA== ACAcR5/3+f4fgPAeA4DwAA== AcBQH58i+F8/5dT3A0BAAA== AeBQOgfB/X835eT/BEAQAA== A8D4KQpj9J6zd8zLH8AAAA== AED4Bw/j+P6/ovheC8AAAA== AgBAf59z/F8P8dB8FwDAAA== BQCgPJ/h/D/Pw/y4DgJAAA== AQA4fw7zbP8bQ7y+B4CAAA== B8DwKxnD+F0P4cxqB4HwAA== AgH8Sp60av6Tc6hWGoHgAA== AgCoPw/jbP+P07g8H4AAAA== AeBUHJzy66rrp5ycFQPAAA== AeAcB58m+d4/hNSXA8BwAA== AeEoPQqi978rR/yhB8EQAA== AKEkT593a14Px5gdAwHwAA== AAHwW5fTunuV4+h+CQHAAA== AIA8ew/3LPsVx6g/B4CgAA== ACD4bgfRbf6f47heDICQAA== ACB8T5OW8f4f4/hGAYDwAA== AkDwJp3h/Hy/snheHkBAAA== AQC8HwXH+P2fw3y+CYAgAA== AkD4Iw9j/N63ssheH8AAAA== BAGAfp7x/n/LQfA8DgPAAA== ASAkf562bX8LQ7y0BwDwAA== AEB4OQ/j/L834+h6B8AAAA== A8AwDp/h2G4+1/yfEkBAAA== AiHEWZdX+x+H8cB4GQHwAA== AYB8GwfHaP8X56z/AYAgAA== BAH8c5ZXTs/SIoh+DYPgAA== BAH8LgeEvvrd4/hWDIMgAA== AUBQXg/x+H8/4fT+AkCAAA== BCCIP55j/d/LQdA8D4JQAA== AeAsDp6k+f4rR/yVAsBwAA== AeB4GgfBaf8356z/AMAQAA== B+GEZJw0/xzrFFSRHkPwAA== BADAPw/j/H/P4fB8DwIAAA== A+CQPQui1S++1fSjH0AQAA== AkGIPwynvP+e8ph+CMEgAA== BOCYNQ+i3a/+hPAzD8IQAA== BwDgHA/h+D/P8/z4GgIAAA== BCH8XpGUI/nd4zhmCIPwAA== BIC8OQ5n/J/TR8g7D4IgAA== BSEkfJeUvztNw/ywBAPwAA== A+CoLQ8ibZ6v15yRH8AQAA== BMCYMw/j3O/2hOA/D8IAAA== ACC4Lw/j3e6ew/geD4AQAA== BSGEX5VXa13PwRS8CQPwAA== A0DIPwqi9P+rcfTkH8AAAA== AQB8OQfH/L8X4+z6BYAgAA== AQHgb56y3m6KY/zUDwHAAA== AgDwLw+i/H6f8/hWHwAAAA== B4DgXAvx0C/O9/zpGgKAAA== AcA4Jw/j3O4+hvyfB8AAAA== AAEgbJ+1/6r/1vybAkAAAA== AEEcZp31/vw/gHAeBsHgAA== AIE0fpbV3m8aR/g/BAHgAA== AAH4cA/x/r+Xouh6DoGAAA== AeBwPgVB/V0/51z/BEAQAA== AUB4VQ/zuLs9ovz6A8CAAA== BIDwOw5j/F/TZ8h/DwIAAA== AKAwfgfR/X8fx/g/BACQAA== B4HgfI/hmD4Mw/ifA8DwAA== AIH8KQ5n/p6TZ8hbD4EgAA== AIA8PwdH/N8fx9g/BYAgAA== A4DgPw9jTE+O95z9HwAAAA== BEHwfAcQ/h//49hyDEOAAA== AKEkaZfX/z4Hx+gZBQHwAA== B4B0HwVHaF1f9xz/EQIgAA== AMA4D5/juPo9x/gfA8BAAA== AQDoPw2i/P2P43z0D4AAAA== AIE4LQ/j/r4fx/gbB4EAAA== B+CgeAnxZT3n1yypHkKQAA== AAH0Nw9n3k+eoth+DwEgAA== AKA4Tw/zufodx/gfA4CQAA== AEE4PQ3j/r0/w3g6B8EAAA== ACD4Pg3hbf2f4zh+DoAQAA== ACEMc5fX//8HgOA8BYHwAA== A4DwPwpj1E+ad9zvHwAAAA== AmCIPw7j3e+qUfA8H8AQAA== BAEUf5133k1ewVA+BwPgAA== AQEkZ5+2/n4PgvyUBwHgAA== AKA8D56m+f4bR/gXA4BwAA== B8CYE56iaP/zFKS3G8JAAA== BwFkdJaU/j9LMvzwFAPgAA== B4HoXh/DGGsMYfw9C8DwAA== A8B4GwfDKPs196z/EcAAAA== AEGYfRbk1f/Vk7RfDMEAAA== BUD4Mwyi/P3zImz2D8IAAA== B+GAUA/xaz/nlKS5GkOQAA== BAC4Owvj9P/Xw+guD4IAAA== ASFkXJ71az8LY7z4AgHwAA== B8D4HgXx1F0Vx9A8D4HwAA== A8BQGp9h+F839cT/EkBAAA== BCH8UpZVa9/TIoh+CIPwAA== AQE8apeU/v4Xw+yWBIHgAA== BQGEX5fXSm/OwbS8CQPgAA== AAEcf5dXvtsdwdA+BYHgAA== AgD4NZ+ivLudsvhyH4BAAA== AUE4Kw7j/v4zQ+yeB8EAAA== AKE4PgdB/98fx9g/BIEQAA== AgHEaZ/3vjqF8eBYHwHgAA== AUBIH5/jaP8v4bT8A8BAAA== ASEkTJ/1+z4Pw/yYAgHwAA== AECIH5/j+P+vwfA8C8BAAA== AIEUYpz3+8nv95yjFECAAA== AAHwV59z2k+eoth+CwHAAA== BEEYfw1z3s1+wVA+B8OAAA== A8CgdA7x/D+rFvy5HkCAAA== B4D8GgOEYP/X96znGIIgAA== BAEgfJ/x/j9Pw/g4BgPAAA== AQDgN5+i/H+Povz0DwBAAA== ACFMU5fX+/8HoOB8AYHwAA== AmB8HoTxPn8+R5C8HwMgAA== A4BwH54i+F8bd9z3EwBAAA== AAHgb52y/nyP43hUDwHAAA== B+DYFgOAYf//tLTnGMIQAA== AeHoNgdBT8+uppz9DMEQAA== ASBkX533KXkN4zz8AwDwAA== AAD4fwzzvPmZY3h+D4CAAA== BAGgf5qy9n/LQ/gkDwPAAA== AAHEf5133k2O4VB8DwHgAA== A+AEQZ/3+T4nlOSZE0DwAA== AQF8OgfFbv8X46z+BIEgAA== BeDoGgOA8f/n5+zlCMIQAA== BAEIf5+ybv9PwbA0B4PAAA== B8CgNJ+g3C/ulvyxHkJAAA== A+FMSpOUs/ol9eTFEMHwAA== AUAYPw/jbP8/wbS+B8AAAA== ACEMP4tye39vJ2j+GEIAAA== B+D4GQMCYZ/394zjGcIQAA== B8H8chRHiH8I8RQnH8HwAA== AeB8GwZH2c8yZ8z/AcAwAA== AGAUfpXV/X0/wXA+BEDwAA== B+EsSpKUY/5jV6yFEMPwAA== A4CYPw1jbN2f1RS/H4AAAA== AeBMUZ53+Z8jJMT5A8DwAA== A+AUBoHX/n8/9cCwFAPgAA== B+GIfhRHWH8NcRQ/CMPwAA== AIAkf5r39H8LR/gtBwDgAA== AiBEX5332W0O8XB8EwDwAA== AiBMH5XH+f0P8XB8EYBwAA== ByFEaJ80/x5H8cTQFgPwAA== AeAIfwnzZf0vxTStB8CQAA== B8CYMw7jLPvxFKS/H8IAAA== B4B8HgXFKPld9zz/EIIgAA== BwDkPQznvDnJc3z4HwIgAA== AeBwXA7xuTs5Z/z7AkCQAA== A+DgOA3hbT2n9yz5HkAQAA== AgD8O5mmZP2X8yhmH4BgAA== ACD8dZTXvbmZInh6DYDwAA== BAD4HQ+i+L/f4/hyC4IAAA== AAEIf5fT/v8PwfA8BYHAAA== BSE8SJ/1K7pVw6yaAoPwAA== AAHEb5v3tnqN4fBMDwHgAA== AkBYXw/zSO8+8bB+E8CAAA== ACF8epOUZ/8X46hmBIHwAA== BAH8aQ02/pzX40hSD4OgAA== BCHMUpbV+//DIOB8CIPwAA== BICwHpfB+H/fx/g/CAJAAA== BCHEcZ53/x/DIMB4DwPwAA== AIB8FwfH+P8fpvh/AYAgAA== ASBkH59n2U8O49z8AwBwAA== BID8PQ8mTI/e55hzD4IgAA== AgDwPw9jbF+f85h+HwAAAA== B+EoDgOA8/5v1/yFEMMQAA== BEGIc5/zLvvlgKA8D8PAAA== AeCoKw+ivfqlx+yVD8AQAA== A+D4Igyg/fyzNmzXHsAQAA== B4HgbJWQ3izO93zRHAPAAA== B4HAWJ8w+h/H9cTxGgPAAA== AiB8eJ80bZ8X84hyFoDwAA== AAD8egeU/P+X4+h2DICgAA== BOEkbJaU/z5rR/gRBEPwAA== AgB8Wg91+N8X88h+EoCgAA== ACBMH53n+f0P4XB8A4BwAA== AiH8Ypi1Pyp+VoyjH8IgAA== B+BIGgXB+f1n9WT9EMIQAA== AgDwPA/zz8n55/geB4AgAA== A4B8FQXH+L0ftnz7EYAgAA== BIDgJ5/j3G7OpvhdDwJAAA== BICwH59jaF/fx5g/CwJAAA== B4FQapXRvnhV9WTfFAPAAA== AQF8PwfhvF0ew/B+H0BAAA== AQH8LgXFvvid43zeDIEgAA== ASD4Iw/jbf6XoqzeD4AQAA== AoB4Gweh/f/fwvBsDwCgAA== AkDMOQ3n/L2n8WB4H8AgAA== BgDAL53j/HzP8XBcHwJAAA== A+CQMg/hvXu1lOS/HkAQAA== BAHkR5+2an7PorhUCwPgAA== AAB8Hw/n2O8e4/h+A4AgAA== AkD4Pwoi9N+7c9hmH8AAAA== B+DgHAOA8T/v9/zhGEIQAA== B+EgfAOQtztt1/yhFEOQAA== A8BQHQfD+D8/9fT7EUAAAA== AgB8Xg51+N8bc9h+EoCgAA== AIAwH5/j+H8fx/g/AwBAAA== AAC8Lw7n/P6bQ/geD4AgAA== AAB8Tw+2+P4f4/hWA4CgAA== BAHwLgfB/n7f4/heDAMAAA== AAF8PwbH3u8aY/h+BYEgAA== AgD4Zg/xbP6fsrheHoCAAA== AAH8Jg9l/t6fotheDoEgAA== AiCMM5/nbf+HkKA8H4BwAA== AAHgdJ/x/j+Povh4DgHAAA== AAEQZ5eX/5z/9PTzBEAAAA== B+DAKJ8g/R7n9cTRHkJQAA== B4GAcJ/x3i/GlOS5HgPAAA== AAHwch7H/j4/8bwnB8AAAA== AcAofQ6y/L8rR/yxB8CAAA== B+HYfhyD4EkD4Jw/DcPwAA== A8DgZA/x3C6utvzZHkCAAA== AgCEfw73/H+LUfA8HwCgAA== BAH4Qxj1P+v+V4xhD8AQAA== AeBwHQbD+T87Z/z7AUAQAA== BKEkTJ/1uzpNx/gZAgPwAA== AQE8OQ9n/p8Xw8y6B4EgAA== BkGYZRcn/Mmf8nRTDMEwAA== BwFgXA7x+j9Lc/z4EgOAAA== AeDwHgfBSW++57z/CEAQAA== B+GQfJEQZx3/1RSjHEPQAA== AOHoHgOA8/+v5/hlCMEQAA== BKGEUZv38z/HhOApCwPwAA== AOAcA5/n+f43hOAfA8BwAA== AAH0V5LX8n+bIvhuCQHgAA== ByD4HwdhVn81Q3B8D4JwAA== BID4OQnj9L3X52hrD4IAAA== A8EoJQ+i/r4vlvyRF8EAAA== B4AwRg/x+H5flvyfEgKAAA== AEHwZ59zTk6+opheD0HAAA== ACEEf533v3kNwXA8BwHwAA== AAAcf582/N8fwdA2B4DgAA== BSEMQp/1+/5HgOScAoPwAA== BCEEfpeU/39PwfA0BAPwAA== AACIP5/j/P+PwfA8D4BAAA== AKEkf5RX/10LR1g9BQHwAA== AEH4R5jz8vy7InhOC8HAAA== BwFgTJ/xaj5P87zYEgPAAA== AcB4H55jSM86Z5z/A8BAAA== AIHkf5j3JnmJZzhtDwHgAA== AAH8fAaU/r+bY/hyDIGgAA== B4DgPwsiZF/P95zlHwIAAA== AID8HwbH2O+aZ/h/CYAgAA== BEEQfg3x/n1/wXA+BkOAAA== AAHgPwfD/n+P4/h8DQEAAA== B4GwdhrHeGsPcaw3BsDwAA== BAH4NgfB3u/eovh+DIMAAA== AEBYD5/j+P4/4fBeA8BAAA== AcB8HgVF+N0/51z/AMAgAA== BAHkT582al7P45hUCwPgAA== AeB8HgTFufk5Z3z/AMAwAA== B4DwJgXB/HzftnzfHAIAAA== BIGgWBv37L6b9+wNAsCQAA== AeA8D5OGsfo9x/yHAcBwAA== AOA4DZ9j+Z4/x9gbA8BQAA== AAH8HwOG8v+f4/hmCYEgAA== BIG0X5JX0k/aR9gvCQPgAA== B4DwMgfBbH/Xtqz/HAIAAA== BcDwFgXB+H3/pnz/CEIAAA== AAHwLw+i/n6f4/hWDwEAAA== AED4HQ/jaL+/47h6C8AAAA== BQEgf5LT9n9LQ/ysBQPAAA== B4FkeJUU/h1H90zxFAPgAA== BECIH5+i+P/vwfA0C8JAAA== AgD4Nw/jnOucsvh+H4AAAA== AIHwbg7xvnqZZ/hfDgGAAA== B8DwFQOC8D//tvzjGUIAAA== BAGUdJ/1vjvdgPA6DgPgAA== AMCYNw+i/P+/hPA3D8AAAA== AAEgb55k/f/fkzz7AkAAAA== A8BcHgXFaP0/9TT/EMAgAA== AOA4fgnxZf0/xzgvBsCQAA== AOH4PQsiR4++55hjD8EQAA== AgB8UpfV+P8Xsuh+EIDgAA== AEAUfZ93/B8/wdA6B0DgAA== A8B8DwLH0O46d/zPEcAgAA== AgDEP5rn9H+LcfBsHwBgAA== B+CEcJ40/R/jFMSxHkLwAA== B+EgTJOQ8z5v1/yBEEPQAA== BAH8R5l30szeolhOC4PgAA== BQHEUZ/3ujvFoOT4CwPgAA== AOEUZZ13/xw/hFAbB0HwAA== AgD4dw9zTM+esph+H4CAAA== AQHEX5532k+KYdT8CwHgAA== AUB4F59jaN8/opz+A8BAAA== BICgPJ/h/D/Px/g5DgJAAA== B+DgFA3haT3vtjz5GkIQAA== B6B4HgVBad1f9xz/EIIQAA== AeB4HgbB2e86Z/z/AMAQAA== AiC4JQ/j/b6fkvgaH4AQAA== BEGQfpnxZn3/wTAuDkPAAA== BAH4fAOQ9r/f4/hiDIOAAA== ACB8Tpt18d4f49hOAoDwAA== AEAQfB+V/39/1PwfBAEAAA== A+AYfgOQ1e8+1fSnFMCQAA== AKD4HgfB2e+e5/h/CIAQAA== B4Fwfg9h8D4Hw3g/B0DwAA== AAA8D57U/z5/lbz4HgAAAA== AAHwfJ7x3i+aY/h6DgHAAA== A8A8DwLH8P47V/yPEcAgAA== AYDwHgfB+H+f5/z/CAAAAA== AgH8eJUU/p2X80hyHIHgAA== BwHgfAaQ/j/Lc/zwHAOAAA== AoDwLwtj9F6f99hPHwAAAA== AEAYf57zvPs5QfA+B8DAAA== AeC4HgTB+f27R3y/CMAQAA== AQBkF5/n+H8Povz8AwBgAA== AgB8fg31LPkd8zh+FoCgAA== BCD8GZZH+Z/TY8h6CYJwAA== AAH4fAvxZr+f47hqDoGAAA== BQD8GwZH+N/TY8z+CYIgAA== AOAcB5/n2e4+hPAfA8BwAA== BGGMf5i2J/npQTAkD8PwAA== AKA4Dw/j+f4fx/gfA4AQAA== A8A0DwPH8H4/1/yPEUAgAA== B8DwHA8gaB//95zzGkIAAA== BAH8c5j3JvnRIihuD4PgAA== AAB4fw3zbP0f4zh+B4CAAA== AEA4D5/j+P4/w/geA8BAAA== AgDwPp/hTG+e87h+HgBAAA== ACAMHp/y+2tvp/y8GAIAAA== ASB8FwXH+f0fonz+AYAwAA== AkDYL5+iLPq98bBWH8BAAA== AiH4LQnj16ye83hKH4EQAA== B8FQUpzxunlxNGT/EkPAAA== AgHAb5fTvnqN8fBcHQHAAA== ASBoF57j+f8LIvz8A4BQAA== AIA8eJ/1vLsVx+g7BoDgAA== AIH4FgfB+v+fpvh/CIEAAA== BAD8PgfFLPvd47h+DIIgAA== AADwL53j/Hyf43heDwBAAA== AeBkVZXX2S0upnz5AUDwAA== B4AwDp/haH5f17yfEgJAAA== AeBUFpdF+V8/pNT/AEBwAA== AwCgPw9j/F+P09y8HwAAAA== AAEgfB/27P+bt/wfAkAAAA== B6BQHgfBaX9f9bT/EAIQAA== A+C4Kwhj9dyzV0yPH8AQAA== AAD8Jw+m/P6fovhWD4AgAA== BICkPw9nbF/Px5g9DwIgAA== AIEwfp7xvnsZR/g/BgHAAA== AgBEfxPG+f/PseR/EQAgAA== B+GIHgOAY//v1bSlGMMQAA== AIDwWg/x+H+X5+h/CgCAAA== AED4aw+yvPq14+hWD8CAAA== B+BIPgXBLflt9TT9FMIQAA== AAH8PQVH/p2f41h6DYEgAA== BEEcR5n38vx/gHAOA8PgAA== BCD4F51j2c3eolh+C4JQAA== BAH8SpeUav7X46hWCIPgAA== BAGEfZPX9j/PwfAoDQPgAA== AwDgLw+i/H6P8/zUHwAAAA== ACB8c5x3/d0TIkh+B4DwAA== ASB4fg/DuH8O4fg/DwJAAA== AAH8cJ31br2Xoih6DoHgAA== BAH4bwmyZvzf4zhGD4OAAA== AOA8H4LQ8//nhaD8HgOAAA== AOAYPw/jLfs9xbA/B8AQAA== B4DgPw8iTE/O95z1HwIAAA== BAH8OQnnZr3X4yhqD4MgAA== AQEoPQ/j/r8Pw/y4B4EAAA== BgFEeZdX/h9H8cB4FQPgAA== AAD8FZ9n+J+foth6C4BgAA== AEAUfZ/3vDs9wfA6B0DgAA== AQB8PwPH1O8e4/zuBYAgAA== BAFAf5uy9n9P4fBkBwPAAA== ACB8fJOU9b8f4/hiBIDwAA== B+CwHAOA8T//1/yjGEIQAA== AgDIPwvj9P+P8fBsH4AAAA== B8B4PwoiRM96d5znF8IAAA== A8BwPgTB/H07d3z/FEAAAA== A8C4Jwmi9Py/lnyHH8AAAA== AeBIGg/h+f8n5eT9AsAQAA== B+HgLAWAvzjt93zRHEMQAA== AAH8GAf37H8b9/AMH8AAAA== BQHEcZ53/h/DIMT4DwPgAA== B+CgHgdBaV/v15y9GEIQAA== B8EkSJ80+h5n18yREkPgAA== AkDwfgfRLHu987h+HECAAA== AeA4HgXB+f0/x3y/AMAQAA== AAE8Z5XX/vwfgngeBYHgAA== B+CIUgvxYf/nlKStGsKQAA== AQDoPw+i3O+O4/z0D4AAAA== AQF8X542Ss8aY5z2A4HgAA== BKGMU5O0f4j/FuTlGMKQAA== BwDkHwbH2G/Kc/z8GQIgAA== AAB8HZfH+L8f4/h6AYBgAA== BED4Hw2iuPn943h2C8IAAA== BCCMH52m+f3PwXA0C4JwAA== AiBEeZ33/T0H8WB4FwDwAA== ACHMW5OW8/+H4eBkCYHwAA== B+AQBp/haX5/lLSfEkJQAA== AIHgP5vjRm+O57htDwFAAA== A+HQLAcA/x6/9dTTHEEQAA== AiDEOJ/x+j4vx/yOEYIgAA== AOEoPwyi//0rR3g1B8EQAA== AAEQf53z/n0fwXA+BwHAAA== A+AkB5+maX4vlryVE0BwAA== B8GwdJsluSpO0myXBsHwAA== A+A4DgfBaf4/17yfEMAQAA== AEC4Pw6i/P+7Q/g2D8AAAA== AGEMf5q21+8qQfAkB8HwAA== AAHAf5+ybn+P4bB0DwHAAA== A4BcHQfH2K8e9fT7EYAgAA== B+BYHgdBKdt99ZT/EMIQAA== AoD4LQvj1K6e9/hLH4AAAA== A8BoHwZD+N8rd9z9EcAAAA== AeH4MgRB/92zJkz/DMEQAA== AoCwPwnj9H2f13gvHwAAAA== AgD4PQvj1K+e8/hqH4AAAA== BkCIPw6i/P/rUfA0H8IAAA== B8GwfAMQZh//15yjHEOAAA== AKHkSZPX8z6H5+hJCQHwAA== AQDkPY/yPsm+J/jeE4BAAA== B+CwLAcA/R7/19yTHEIQAA== AIHwLwui9n6f5/hHDwEAAA== AQDgP5/jTG+O47z8DwBAAA== B+BIGhfTuH8O5fQsCQPwAA== ACEUfZ933w8ewdA6BwHwAA== ACB4fQ6y/b8bY/hyB4CQAA== AAHkNwfH/n+Povh8DQEgAA== AcBIHw9j+N8v5dT9A8AAAA== B+FcUp6UoxxilLylHUPwAA== B4HgeB/F8D4H0fwPA8DwAA== AgDAfw3z/H2P8XB8HwCAAA== BCEMe533L/lFwSA8B4PwAA== A8CwLA+g/D6/1/yTHkAAAA== BAEIf5uy9v9PwfAkB4PAAA== AAH8PAeE/r+f4/hyDIEgAA== AeBEWJ/12S8m5eT5AkDwAA== AQB8c5z3vPkRImz+B4DgAA== AAB8Ow/nvPsV4+h+B4AgAA== AgDoPQ/j3K+O8/h4H4AAAA== A4CkPw+mLHuN17y1HwAgAA== BMCwHgfB+H//x/g/CEIAAA== B6DoHgKA8f/Ld/zlGIIQAA== A4DwKw7jvHqRd+zfHwAAAA== AAHkX5dXal+P45h8CQHgAA== AiCIP57j3e+KUfA8H4BQAA== B+DwHgKAYX/7d7znGEIQAA== AeBEEZ/n+T8npOT5A0BwAA== AAFAf59z/l8P4dB8BwHAAA== AIH8ZJeUvrqdpvhTDIHgAA== AkDIewvzZP+n8aBsH8CAAA== AgDwfAvx9D+f8/hqHgCAAA== AGEcZZ/3T64+gLAaB8HwAA== AAB8cw73/P8TIuh+B4CgAA== BEEQfp5x/l97QdA+BkPAAA== BwGgVB/nnZzc8/wVAsBwAA== BCH8UJ71S6/SIqh6CoPwAA== BCE8Y5x3/9xTAkgeB4PwAA== BAE8epaU/v9TQ+g2BIPgAA== ACH8cp60L/uRIqh2DoHwAA== A+CYPwsiRc++1ZSnH8AQAA== BgD8PwjnJPnZczhuH4IgAA== AAH8MQ/nvruVouh6D4EgAA== AIHgPA/h/j+P5/h5DgEAAA== A+CcI5ymvfixFGSXH8BwAA== AQHgdJ+w/j+PovzwDgHAAA== B8BwDAvh8D5/9/zLEkIAAA== AAB4Xg/x+P8f4/h+AoCAAA== AgDAP4+ja//rYvj+AYAgAA== AUB4Pwqi9P87Y/zmB8AAAA== B4BwSg/xuHpV9+zfEgKAAA== AAHwcp/xbn+Xoqh+DgHAAA== AoDQfg7x3G+adfB/HgCAAA== AIAwP59j/F8fx9g/BwBAAA== AgEEf553/l8LUdA8FwHgAA== AkCYPw/jnOu80fA+H8AAAA== B8CUHQLH8D/7VfSrGUIgAA== B8A4KQ8i/J5318yTF8IAAA== AeAoDwLj/v+/46B4CgPAAA== B+GMYZRX34ziFESZHcPwAA== A8DwPAnhZD2/9zzrHkAAAA== B+CYMwqiZf/zFKSnH8IQAA== A+DMKZnnJbil9STJH8BwAA== BiGEUZv38z/HkOAoGwPwAA== ACH8fJOUl6uc4/hiDIHwAA== B8DwJAeA/D7/tvzTHEIAAA== AeBYF58iad8/pJT3A8BQAA== AAHgPQ/j/j+P4/h4DwEAAA== ACFMbpeU//4P4fBUBIHwAA== A8DwFgXB+H2/tnz/GEAAAA== ASFsVpTV+/0LInz8AIHwAA== A6CoKwui9f6H1+yFH4AQAA== AQF4PgXB/v0f43z+BIEAAA== ACEsf5q2Z/8LQ7gkB4HwAA== AUHoNw1j3s2uolz8D8EAAA== ACCMc573/f+DAOA8D4DwAA== AQD8KQ/n3K6W4+zaD4AgAA== AAH8LwfHnuqc4/heDYEgAA== ACD4fgeQ3e+e4/h2DICQAA== AQHAH5/jan+P4bT8CwFAAA== AwDEPw+m3G+O8fT0HwAgAA== B+BgHgXB2W1u93z9EEIQAA== BEDoPQ+ivLvt4/hwD8IAAA== B4HgehZHmX9M8TQvA8DwAA== B+CUMp5lTU/yFIS/HkJwAA== BIGEX5y2+n3LRXA1CwPgAA== BCFEeZ93vxtF4cB4BwPwAA== B+B4DgGA8fx/93zHEMIQAA== AAHkf5n3JnmN4zhsDwHgAA== AOAcB59n+d4/hNAfA8BwAA== BIGwPgdB/l/fx9g/DAMAAA== ACH4Dgvh8/6f4/hOCoEQAA== AgHILw3j/vyP8XBcH4EAAA== AiD8NIqT2+vt5KiWH4IgAA== AcA8DwPH8P4/x/yPAcAgAA== AEHwOw7jbn+zY6h+D0EAAA== AcBYMwvj9P83pOTvB8AAAA== A0C4PQqi9L+7U/yiH8AAAA== AAH8NQ1n/p2folh6D4EgAA== AMH4PQsiZp+/55hjD8EAAA== AEAYfw/z3O8+wfA+B8CAAA== BIGEX5NX8l/PxdAtCQPgAA== AeH4Fwbh9F0Xw7B0D8PAAA== AED4NQ+i/L+/ovhyD8AAAA== AkDwPgfBbH+/87h+HEAAAA== B+BQGwdDaV939YT/EUIQAA== ACH8E5TH+/2TImh+CYFwAA== AIH8IgfF/v6XpuhfDIEgAA== ASC4PQrj9b+bQ/yqD4AQAA== BCFMW5fXK/tF4aB8AYPwAA== BgHAeJ/xvjvF8eB4HgPAAA== AsDoPQqi9L+rd/hhH8AAAA== AEHwZJ/x3i6+ovhaDkHAAA== AgC4Pw6i/P+bU/g2H4AAAA== BCD4LQ7jbb7bY7haD4IQAA== AcB4HgfB2O8+5/z/AMAAAA== BAHwV5fTKnvdorh+CQPAAA== AEB4XQ+y+L8/4/hyA8CAAA== BIDwagvx9H7X5+hPDgKAAA== AAAYPw9n/P+f83h+DAAAAA== AcBYOw9jbN835YT/B8AAAA== AEDoLw9j/N6v49hcD8AAAA== ACAIf5fT/f8PwfA8BYDQAA== AAD8KZvn9L6X4+hKD4BgAA== BwD4HgbB2O/ac/z+GIIAAA== B+BwCg/x+D4Px/goBwPwAA== AcB8FwVH+N0/plz/AcAgAA== A8B4D5OCsPo99/zHEcBAAA== BwFkV5TXunlJMnz8EQPgAA== BAD0HwPH8H/f4/huCQIgAA== B0GQfh/DmGsM4fw/BMFwAA== B8D4EQ5j2I/yNsz7G8IAAA== AOEcYp/1T+42hKAfBsHwAA== AQA8PwfH3O8ew/y+BYAgAA== BCEIfpnx9/1PwXAsBoPQAA== A8DoJwnjZPyvtjzNH8AAAA== A+B4SgnxYfw39yzPEsCQAA== AgD8PQ+mnKuc8/hyH4AgAA== BKE0T5NX005ex9gPAQPwAA== A8Aweg7xbH8zV6y/FkCAAA== BEEQZp/x/n5/gPAeBkPAAA== ByCIPw8ibd/P0ZS0H4IQAA== A8DYOQ8ibJ+39YTzH8AAAA== BAD8ZA31/LzfonhaDoKgAA== AACQPovy/v+/p+i+BIAAAA== AQA8fpn1ZP0fwzyuBoDgAA== AAH8ZJ20/ryfonhSDoHgAA== AeAoPQ3jvbktx3y5B8AQAA== AeAsDoLX+n8v9aC4GgPAAA== BwEAf5bTvntJUfS8FQPAAA== B8BQVg3xaH1/tDT/EkKAAA== AIAoew/z/P8Hx+g9B4CAAA== BCCEcZ/3/T/HgOA4DwLwAA== B+BgHAXB+T1v93z5EEIQAA== AeBYEg/h+f83pOT/AsAQAA== A4BwGwfD+H8X9+z/EQAAAA== AMAIfw9z/N8vxdA9B8CAAA== AiB8S5PXsfoV8+hOEYDwAA== B8BQcgfRbH93tKT/FEKAAA== ACAkfY7Te+vvZbjfEgIAAA== A+BIOgXB/f0n9WT9FMAQAA== AgGIPw9j/t+P0dA8H4EAAA== BCFET5PX835P4fBMAQPwAA== BQD4Iw/jbP7XoqzeD4IAAA== B+GEYZh39xzjFESJH0PwAA== BEHwXgXRan3/4zh+CEOAAA== AiDMf5KW1e+KcfBkHYDwAA== AQBkHZ/n+D8P4/z4AwBgAA== AED8FwXH+P2/onh+CcAgAA== AIA0Pw/nbH8fx7g/BwAgAA== A8FwGgfBan8396z/EEEAAA== AeHwHAOA8z+/5/zjCEEQAA== B+DQcg5xTU/yNIT/HkKQAA== BCHkfJn1JznN4zhoDgPwAA== B8DoPwxjDMnodxz9H8IAAA== BEGMcp/1Tu/mgKA8DsPgAA== B+DQGgbBuXvxdeT/GEIQAA== BAH4NgfBvvvdovh+DIMAAA== AiFIPw1j/90P8VB8F4EQAA== A4B8CwPH8P4X9+zPEYAgAA== B8HISZFT8pzn9UTJGcPAAA== BEHwTg/xKnr947heCkOAAA== AeH4JgTBv/i5JnzfDMEQAA== ACAMHp2x/39/xty8GAIAAA== AAE4Pw9j/t8fw9g+B4EAAA== BgGAX5PT8n/P0fAsGQPAAA== AeBwGpfBaX8356z/AEBQAA== AAD8LQ3n/Lyf43haD4AgAA== AQB8PQ7n3K8aY/z6B4AgAA== AeAIPw2i/f0vxXS1B8AQAA== AoBQfg/x3G8e9fB/FgCAAA== AOA4HgfB+f8/x/g/AMAQAA== A+C4IwzjvfixFmyfH8AQAA== ACD4Dw/jaf6f47heC4AQAA== BKEkTJv18z5Px/gJAgPwAA== BAEEb5/3bn5PwbAcBwPgAA== AAH8K5bHbv6TY6heDYFgAA== BwGgbJvx1i7O0/yIHgPAAA== A8BwTAvx8D4/9/zLEkCAAA== AMEYPQ/jvrs9xfA7B8EAAA== B+A8DQLHsbp5V/yLEcIwAA== AeC4FgfBufu9hvy/CMAQAA== AwDkLw7n3G6Kc/zcHwAgAA== AwD4Lwpj9N6bc9zOH4AAAA== ACD4Fp/h2e+eovh+CoBQAA== AQEgP5/jvnsNw/y8BwFAAA== ASEkR5/3a34PgrycAwHwAA== BCEIfpvx1+9OwfAsBoPQAA== B+EUYph191xzFESPFkPwAA== B8BAD58i+F5v9dTVE0JAAA== BgGAf5qy9n/LUfAkHwPAAA== AUBYH5/jKPs94bT+A8BAAA== BCFMap/1T+5G4aBcBoPwAA== BCEMbp/1L/pNwbAcBoPwAA== BwDgHAf3+H8P9/AcA4BwAA== AAH4Zw8y/t6fothWD4GAAA== AeA0B59n2U4+htyfA0BwAA== B8DIEw7jaP/jNKT9G8IAAA== AAH8OZ8mvpuV48hyD4FgAA== ACBEf582/V8P4dB0BwDwAA== BAGEcJ/3G+vsd/yHEMAQAA== AED4J5+ivPq9ovhWD8BAAA== AQE8Rp+0+v4fgvyWAoHgAA== A+B4KQ1jvZg190zbF8AQAA== AwDgfA3x/D2P83z4HgCAAA== BCFEeZ333y1G4WB4BwPwAA== AQE4Jw/j/v4fgvyeB4EAAA== B4BwPgfBTG9e97z/FAIAAA== AOAkT5/3SW4ux7gdA0DwAA== ASBofgdR/d8P49z8BICQAA== B8B8EgTF+P1zNmz/EMIgAA== BECAP59j/F/vwdA8D0JAAA== AAH8YJ/VH2t8VfyDH8AAAA== BKD4GgfBaf/X56h/CIIQAA== BKH8RpGUY/zfpjhHCIPwAA== BICwO55j/F/TR8g/DwJAAA== BIHgV59zSk/Opph9CwPAAA== AQBwXg/x+H8f4/z+AgCAAA== AEH8DwLH8v67Y/hOCcEgAA== AKH4KgeA//6X5+hXDIEQAA== AcBQF5/j2G8+pPT/A0BAAA== BAC8Mw/nvPvVgug+D4IgAA== AyCoLw+i3e6O0/yUH4AQAA== AkDQLw3j/Hy/8XBeH0AAAA== BSEsZ5y2v/hJAnyUB4PwAA== AAB8Hw3n+P0f43h+A4AgAA== AgHAX51z+l2P8VB8GwHAAA== AeBIeQnz9b0n5WTpB8CQAA== BCGAf5rzt3vJQfAsDwPQAA== AIE8Tp60+v4bR/gXAoHgAA== AYBwH5fD2G8e5/z/AQBAAA== ACD8PY3xuD4Ox9jeH4IAAA== BwC8NQqm9L/bEvyiH4IgAA== AAD4Pg/h3O+e4/h+DoAAAA== AIEwfgfR/n8fx/g/BAGAAA== BACkN47Te93vZbj2EoAQAA== AQB8f4Wxp11yxtD/HwBAAA== B8EcfRdC2F0NoXRfHEHwAA== AIA8S5+2+P4Xx+gXA4DgAA== B8CgJA/h/D7vlvyZHkIAAA== AQFEeZ/3vjsF4eT4BwHgAA== B4HgZJzxvjjJNnzZHgPAAA== ASBEeJ/1/T8H4eT4BgDwAA== B4FQUp7naH8Lc7ylBUDwAA== AOB4HgfBufs95/h/AMAQAA== BIHkeJcU/h/H58hxDAPgAA== AgHAL5+i/n6P8fBUHwFAAA== AIA8Sp/1+P4Xx+gfAoDgAA== BAHAf5HT9n3P4XBsDQPAAA== B+D8J5iyJoiyJozyH4PwAA== AAE8T553+t4bQ9geA4HgAA== A+CIOQvjZb+n1aSpH8AQAA== B+AwDwPDsXp91/yPEUIQAA== BKEkaZ93vxpFx8gZBwPwAA== AcAwC5/j+H43x+yfA0BAAA== B6H8cJIUR4/SNozjHIPwAA== AIEwf5XT3m0ex3g/BQHAAA== AIHgPw8i/l+P59h1DwEAAA== B8DYE55jSM/yNIT/G8JAAA== B6EURpn1Y3xflDSPEgPwAA== AQB4G53j+P0X42z+A4BAAA== ACH8F5OGY/+forhmCYFwAA== A8DIOQnj9L2n9WTpH8AAAA== AAH8eZn3JrmV4yhqD4HgAA== B8FQPgdBTk9+9ZT/FEMAAA== ACGMf5DX9/2LQXAsDYHwAA== A8FQOgdB/l839cT/FEEAAA== B+EMQ5n3I/hllCSNE8PwAA== BIGQdg/xbn/fhLA/DgOAAA== AAH8OAfF/r+X4+h6DIEgAA== B4CwFwfD2G/elvy/GQIAAA== BAF8bpaU3u5aY/hWBIPgAA== B+FQbAUQ/xx/9VTTFEOQAA== A+FkSZp30w4id8zJE0HwAA== A+DcOoniLcnaI8iuHYPgAA== AgD8Pwhn9N2bc1huH4AgAA== AgHEX582al+P8ZB0GwHgAA== BCCEH5/naX/PwbA8CwJwAA== BgEEf5n3Zn1P0TAsFwPgAA== B8HwTAKQ8j77d/zDGEOAAA== AAB8H5+maP8f47h2A4BgAA== A8DMLwnnJPit9TTNH8AgAA== BAGUXp71an/bQbA+CgPgAA== AGB4HgfB+f8/4/h+AMAQAA== AeBIcQ/z3a8mpOT5B8CQAA== AEHwdA/x3i++ovh6DkGAAA== B8DIMw+inOvktOT1H8IAAA== ACEkbZ/33y4Ow/gYBwHwAA== AwCoNw/jbP+Pkry8H4AAAA== BQFEcZ/3bj9HoKT4BwPgAA== BADAP53j/H3P4XB8DwJAAA== AIH8ZJ00/pyfplhTDoHgAA== BKEcY5TX//xTBGAfBYPwAA== AIH8HgXFuvmd53h/CIEgAA== B8DwPQsiRA/+95zjH0IAAA== AkDwLg/hvHq98/heHkAAAA== AeA8CwPH8f43x+yPAcAwAA== B8DQMgzh/H3zNGT/HkIAAA== AAHgeBv2277tt+wPA8AAAA== BwCgfA/xbD/P07y4HgKAAA== BAD4HA/h+L/f4/h6CoIAAA== AQH8MQfH3q+Wouz6DYEgAA== AAEMf5+2vvsNwfA0B4HgAA== B8DwFA2g+D3/tnzzGkIAAA== AEAYfw/lPeveU/h/DAEAAA== BiGEcJ/1bz/HkKA4HgPwAA== BAH8fZo2Ro/aY5hiD4PgAA== AiEEf5r3Z38LUbAsFwHwAA== ACH4M5TD//2TImh+DYFQAA== A+B4DgaA+f47d/zXEMAQAA== AKAcf5VXvdkdxVA/BYDwAA== B8D4Mx7gdJyXA7xmD4HwAA== BSC4Pw8iTc/ew5y2D4IQAA== AgDAfw/zbH+P8bB8HwCAAA== ACB8dpTV/f0bInh+BIDwAA== ASDILw/jbf6P4bTcD4AQAA== BIEgf5qy9n9LR/glBwPAAA== BIGUfxVHUf/FcVR/FMCQAA== AUBQfA/x/D8/4fT6BkCAAA== AoCQPw9j/F+f1dA/HwAAAA== AeAsf5o2Rc8qR5ylB8DwAA== AEAcfgv19P8/wfAuBsCgAA== AADgP57j/H+LY/h8DwBAAA== BED0NI+TXuu9ZPiWF4EQAA== ASE8fpKU1+8aQ/ymBIHwAA== AkHIKQ/j/r6n8eBYH8EAAA== BAHgXA/x+j/P4/h4CgOAAA== A8BMHwXHaP0v9TT9EcAgAA== AMEoLw+i/v4vx/gVB8EAAA== AAHwfJ8w/h+f49hyDgHAAA== AEB4H5XD+P0/43h+AcBAAA== BQHAcJ/x/j/HoOT4DgPAAA== AQBoXw7n/Kqf87h9CwBAAA== B+FYEgZB+99zNMT/EMMQAA== BIE8eZp31o9SR8grB4PgAA== AOAcf5m2Jfk9xTAnB8DwAA== AgHET5n38nyP8XBMGwHgAA== A+HgLAeAvzqt9/zRHEEQAA== BAEMf5z3vvlJQXA8B4PgAA== BiFET5OW835P8fBEEQPwAA== AQHgPQ/jbj+P47z4DwEAAA== A8BYGwfDaP839aT/EcAAAA== B+GEUJOU8z/nlOShGEPwAA== A4DIMw7j/P+DNOT9H4AAAA== BAGAeB0X////9FwPAMAQAA== BQH8cpZVTs/SIoz+DIPgAA== AIE4Ow3j/v0Xx2g/B4EAAA== BAH8fpKUluvYY/hmDIPgAA== AEH4Hwrj0u+6Y/huC8EAAA== A+BoHwZD2c8qd9z9EcAQAA== B+B4FgWAaf1/tjz3EMIQAA== AQD8HwZH+N+bY9z+CYAgAA== AQDgH5/juHuN4/z8CwBAAA== B6FkSJ80uxpF98zREgPwAA== AQBEf4Sx7//7xpD/EQBAAA== BCGUfpVVb13fwRA+DAPwAA== BCHEWJ/12y/G4eB4CgPwAA== B+HEcJQU/x3jNETxHEPwAA== AiBMWp/1af8H8aB8EoDwAA== ByFEeJ80bx9H8YTwFgPwAA== BgHEWZt38h/H8cBoGwPgAA== AoHwLgfB3m6e9/hfHAEAAA== A8D4IQ1j/Jy3tkzbH8AAAA== BwD8GQNH8J/X88zqGYIgAA== A4DgKQ/j/D6H9+zZHwAAAA== ACB8WJ/1ubsV4+h6AoDwAA== AOA4fw5zTc86R5g/B8CQAA== BEH0VJ202i3+onhyCkPgAA== BAHgeJvx9j/H4+hoDgPAAA== BOE8fJEUZ51/xxgjBMPwAA== BODwFgfBuXv9pvh/CEIQAA== AIDwJ59j/F6fpthfDwBAAA== B8HILwmiJvjt9TTFH8MAAA== B+DoHAOA0a/u9/zhGMIQAA== BAH8cJ513o/SIsh6DoPgAA== AAH8Mw+m3u+Wouh2D4EgAA== B+AYFgXB+f1/lHS/EMIQAA== ASEsZ5eWv/oNgvyUBYHwAA== AgFAf51z/l0P8VB8FwHAAA== AQDgP56i/H+LY/z0DwBAAA== AQHgfA7x/j+LY/z4DgGAAA== BCHkUZPX8z/HouhoCQPwAA== BIHkSJ/1aj7H56hZCgPgAA== AOCIPwvjZf+vxbAtD8AQAA== AwDoPQ+ivLuN8/zwH4AAAA== A+EcZJ80T44+lJSTFsHwAA== B8BwC56iaH5zd6zXE0JAAA== AgCcNQ/n/L+fkPA6H4AgAA== AgD8PQ8m3I+e89hyH4AgAA== BwHAb5nzJnjN8TTMHwPAAA== BAHkaZ53/h7DY8hYDwPgAA== AIC8PA+D/r6/4PgeHoCAAA== B8HoR5ESYtzvthzFGcPAAA== AED4K5nj9Py342hOD8BAAA== AAF8Sp/1uvoV4+heAoHgAA==".split(" ")

const BOARD_STRING = "00000111111000011111110001111111100111111111011111111111111111111111111111110111111111001111111100011111110000111111000000000000";

const WIDTH = 1050;
const HEIGHT = 850;

let atom_field;

let selected_hexes = [];

let hovered_atom = null;

let showInfo = false;

let wincount = 0;

let gamemode;

class AtomType {
    constructor(name = null, color = "#000", size=33, render_addition = function(){}){
        this.name = name
        this.color = color
        this.size = size
        this.render_addition = render_addition;
        this.img = new Image();
        this.img.src = './symbols/'+name+".svg"
    }
    glyph_path(){
        return './symbols/'+this.name+".svg"
    }
    render(position,selectable=true,background="#DDDDDD"){
        
        let color = selectable ? this.color : blendColors(this.color,background,10/16);
        drawCircle(position[0],position[1],this.size,color)
        this.render_addition(position)
        ctx.globalAlpha = selectable ? 1 : 6/16;
        ctx.drawImage(this.img, position[0]-30, position[1]-30)
        ctx.globalAlpha = 1;
    }
}

function base64ToBitString(base64) {
  // 1. Convert the base64 string directly into a byte array
  const bytes = Uint8Array.fromBase64(base64);
  
  // 2. Map each byte to an 8-character padded binary string and join them
  return Array.from(bytes)
    .map(byte => byte.toString(2).padStart(8, '0'))
    .join('');
}

class Variant {
    constructor(hex_compat = null, atom_compat = null, is_selectable = null, board_gen = null, post_click = null, info_board = null){
        this.hex_compat = hex_compat
        this.atom_compat = atom_compat
        this.is_selectable = is_selectable
        this.board_gen = board_gen
        this.post_click = post_click
        this.info_board = info_board
    }
}

function RandomInt(max, min=0) {
  return Math.floor(Math.random() * (max - min) + min);
}

function drawShape(x, y, r, sides) {
  ctx.save()
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
  ctx.restore();
}

function drawCircle(x,y,r,color){
    ctx.beginPath();
    ctx.arc(x,y,r, 0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.fillStyle = "white";
}

function rgbToHex(rgb) {
    const rgbValues = rgb.match(/\d+/g);
    if (!rgbValues) return '#ffffff';
    
    const r = parseInt(rgbValues[0]);
    const g = parseInt(rgbValues);
    const b = parseInt(rgbValues[2]);

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
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
        list.splice(index, 1);
    }  
}

function hex_equals(h1, h2){
    return h1[0] == h2[0] && h1[1] == h2[1]
}

const SALT = new AtomType("salt", "#bbaa99")
const FIRE = new AtomType("fire", "#ee5533")
const EARTH = new AtomType("earth", "#55bb55")
const AIR = new AtomType("air", "#99ccff")
const WATER = new AtomType("water", "#3399aa")
const VITAE = new AtomType("vitae", "#eeaaaa")
const MORS = new AtomType("mors", "#444444")
const QS = new AtomType("quicksilver", "#888899")
const LEAD = new AtomType("lead", "#445555")
const TIN = new AtomType("tin", "#666655")
const IRON = new AtomType("iron", "#884433")
const COPPER = new AtomType("copper", "#dd6622")
const SILVER = new AtomType("silver", "#888888")
const GOLD = new AtomType("gold", "#eedd33")

const RESET = new AtomType("GRAPHIC_reset", "#777777", 40)
const INFO = new AtomType("GRAPHIC_info", "#335599", 40, function(position){
    ctx.font = "40px Lexend"
    ctx.fillText("?",position[0],position[1]+15)
})

const ATOMTYPES = [SALT, FIRE, EARTH, AIR, WATER, VITAE, MORS, QS, LEAD, TIN, IRON, COPPER, SILVER, GOLD]
const METALS = [LEAD, TIN, IRON, COPPER, SILVER, GOLD]
const CARDINALS = [SALT, FIRE, EARTH, AIR, WATER]

const ADJACENTS = [[0,1],[-1,1],[-1,0],[0,-1],[1,-1],[1,0]]

function string_atom_field(){    
    let new_board = Array.from({ length: 11 }, () => Array(11).fill(null));
    for (let r = 0; r < 11; r++){
        for (let q = 0; q < 11; q++){   
            new_board[r][q] = atom_field[r][q] == null ? null : atom_field[r][q].name;
        }   
    }
    return new_board
}

function field_from_string(field){
    
    let new_board = Array.from({ length: 11 }, () => Array(11).fill(null));
    for (let r = 0; r < 11; r++){
        for (let q = 0; q < 11; q++){   
            new_board[r][q] = field[r][q] === null ? null : get_atomtype(field[r][q]);
        }   
    }
    return new_board
}

function get_atomtype(s){
    for (const a of ATOMTYPES){ if (s == a.name) {return a}}
    return SALT
}

function atom_counts(a=null){

    let count = 0
    for (let r = 0; r < 11; r++){
        for (let q = 0; q < 11; q++){   
            if (a == null ^ atom_field[r][q] == a) {count++;}
        }   
    }
    return count
}

function hexIsChoosable(h, marbleHexes){
    let valids = []
    for (let i = 0; i < 12; i++){
        let offset = ADJACENTS[i%6];
        try {
        if (!hex_selected(h[0]+offset[0], h[1]+offset[1], marbleHexes)){
            valids.push(0)
        } else { valids.push(1) }
        } catch { valids.push(0) }
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

        let my_atom;

        try {my_atom = atom_field[h[0]][h[1]];}
        catch { return false; }

        if (my_atom == null) { return false; }

        let valids = []
        for (let i = 0; i < 12; i++){
            let offset = ADJACENTS[i%6];
            try {
            if (atom_field[h[0]+offset[0]][h[1]+offset[1]] == null){
                valids.push(0)
            } else { valids.push(1) }
            }
            catch { valids.push(0) }
        }
        has_empty_spot = valids.some((num, i) => num === 0 && valids[i + 1] === 0 && valids[i + 2] === 0);
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

        let bitboard = base64ToBitString(BITBOARDS[RandomInt(1024)])

        for (let i = 0; i < 16; i++)
        {
            for (let j = 0; j < 8; j++)
            {
                let num = i * 8 + j;
                if (bitboard[num] == "1")
                {
                    // add hex
                    let q = Math.floor(num / 11);
                    let r = (num % 11);
                    
                    marbleHexes.push([q,r])
                }
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

                    if (atom_counts(null) == 0) { wincount++; }

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

                    if (atom_counts(null) == 0) { wincount++; }

                    selected_hexes = []
                }
                else {
                    selected_hexes = [h]
                }
                myGameArea.drawAtoms();
            }
        }
    },

    info_board = function(x=null, y=null, click=false){

        let w_offset = 500;
        let h_offset = 900

        let atom_positions = {
            salt: [-260, 0],
            air: [-180, 0],
            fire: [-100,0],
            water: [-20, 0],
            earth: [60,0],
            vitae: [180,0],
            mors: [260,0],

            quicksilver: [-240, 90],
            lead: [-160, 90],
            tin: [-80, 90],
            iron: [0, 90],
            copper: [80, 90],
            silver: [160, 90],
            gold: [240, 90]
        }

        if (x != null){
            for (const [key, value] of Object.entries(atom_positions)) {
                let distanceX = x - value[0] - w_offset;
                let distanceY = y - value[1] - h_offset;
                let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                let a = get_atomtype(key);
                if (atom_counts(a) == 0) { continue; }
                if (distance <= a.size) {

                    if (click) {
                        if (hovered_atom == a) { hovered_atom = null; }
                        else { hovered_atom = a; }
                    }
                    else {
                        return true;
                    }
                }
            }
        }

        else {
            for (const [key, value] of Object.entries(atom_positions)) {
                let a = get_atomtype(key);
                let count = atom_counts(a);
                let pos = [value[0]+w_offset, value[1]+h_offset];

                if (hovered_atom == a) { drawCircle(pos[0], pos[1], 40, "#DFF")}

                a.render(pos,count>0,BACKGROUND);

                ctx.font = "30px Lexend";
                ctx.fillStyle = "white";
                ctx.lineWidth = 5;
                ctx.textAlign = "center"
                ctx.strokeStyle = BACKGROUND;
                if (!METALS.includes(a)){
                    if (CARDINALS.includes(a) && count%2 == 1) { ctx.fillStyle = "#FF5555"; }
                    ctx.strokeText(count,pos[0]+25, pos[1]+40);
                    ctx.fillText(count, pos[0]+25, pos[1]+40);
                }
            }
        }

        if (x != null) {return;}

        if (showInfo){

            ctx.fillStyle = "#333"
            ctx.fillRect(0,1060,WIDTH,HEIGHT)

            ctx.font = "20px Lexend";
            ctx.fillStyle = "white";
            ctx.lineWidth = 5;
            ctx.textAlign = "center"

            // Rendering the informational screen

            ctx.fillText("Select a free marble, and then pick a matching marble to remove them both from the board.",WIDTH/2,1100)
            ctx.fillText("A marble is free if it has 3 contiguous empty spaces next to it. Spaces off the board count as empty.", WIDTH/2, 1122)

            let render_y = 1200

            let left_pos = 110
            let info_x = left_pos;
            for (const atype of CARDINALS){
                if (atype == SALT) {continue; }
                atype.render([info_x,render_y])
                atype.render([info_x,render_y+100])
                ctx.fillText("+",info_x,render_y+56)
                info_x += 80
            }

            ctx.fillText("The four cardinal elements match", left_pos+80, render_y+170)
            ctx.fillText("with others of the same type.", left_pos+80, render_y+170+22)

            info_x += 50
            for (const atype of CARDINALS){
                atype.render([info_x,render_y])
                SALT.render([info_x,render_y+100])
                ctx.fillText("+",info_x,render_y+56)
                info_x += 80
            }
            ctx.fillText("Salt matches with any of the", left_pos+440, render_y+170)
            ctx.fillText("cardinal elements, or with itself.", left_pos+440, render_y+170+22)

            info_x += 50
            VITAE.render([info_x, render_y])
            MORS.render([info_x, render_y+100])
            ctx.fillText("+",info_x,render_y+56)

            ctx.fillText("Vitae and Mors will only", left_pos+780, render_y+170)
            ctx.fillText("match with their opposite.", left_pos+780, render_y+170+22)


            render_y += 280
            left_pos = 250
            info_x = left_pos

            for (const atype of METALS){
                atype.render([info_x,render_y+(atype == GOLD ? 50 : 0)])
                if (atype != GOLD) { 
                    QS.render([info_x,render_y+100]);
                    ctx.fillText("+",info_x,render_y+56)
                    if (atype == SILVER) {
                        ctx.font = "24px Lexend";
                        ctx.fillText("▲", info_x+52, render_y+23)
                        ctx.font = "20px Lexend";
                    }
                    else { ctx.fillText("▶", info_x+50, render_y+10) }
                }
                info_x += 100
            }

            ctx.fillText("The metals match with quicksilver, but only in the", left_pos+250, render_y+170)
            ctx.fillText("order of their transmutation from lead to gold.", left_pos+250, render_y+170+22)
        } else {
            ctx.clearRect(0,1060,WIDTH,HEIGHT)
        }

    }

)

function startGame() {
    myGameArea.start();
}

function screenPosition(r, q, canvas){
    return [80*(q-5)+40*(r-5)+Math.round(WIDTH/2),69*(r-5) + Math.round(HEIGHT/2)];
}

const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d");
const BACKGROUND = "#555555"

const RESET_COORDS = [WIDTH/2-475+40, 900]
const INFO_COORDS = [RESET_COORDS[0],RESET_COORDS[1]+100]

let myGameArea = {
    start : function() {
        gamemode = VANILLA

        if (localStorage.getItem("atom_field") == null) {
            this.reset();
        }
        else {
            try { atom_field = field_from_string(JSON.parse(localStorage.getItem("atom_field")))} catch {this.reset()}
        }

        if (localStorage.getItem("wincount") != null) { wincount = parseInt(localStorage.getItem("wincount")); }
        
        selected_hexes = []

        canvas.width = WIDTH;
        canvas.height = HEIGHT+850;
        document.body.insertBefore(canvas, document.body.childNodes[0]);
        this.clear();
        this.drawAtoms();

        setTimeout(function() { myGameArea.drawAtoms(); }, 500);
    },

    clearHex : function(r,q){
        let atomPosition = screenPosition(r, q, canvas);
        drawCircle(atomPosition[0],atomPosition[1],40,"#DDD")
    },

    reset : function(){
        selected_hexes = [];
        hovered_atom = null;
        atom_field = gamemode.board_gen()
        localStorage.setItem("atom_field", JSON.stringify(string_atom_field()));
    },

    clear : function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawShape(WIDTH/2, HEIGHT/2, 475, 6)

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
        RESET.render(RESET_COORDS)
        INFO.render(INFO_COORDS)
        for (let q = 0; q < 11; q++){
            for (let r = 0; r < 11; r++){   
                if (atom_field[r][q] != null){

                    let currentAtom = atom_field[r][q];
                    let atomPosition = screenPosition(r, q, canvas);

                    if (currentAtom == hovered_atom) {drawCircle(atomPosition[0], atomPosition[1], 40, "#DFF")}
                    if (hex_selected(r,q)) { drawCircle(atomPosition[0], atomPosition[1], 40, "#FFD")}
                    
                    currentAtom.render(atomPosition,gamemode.is_selectable([r,q]))
                }
            }   
        }
        gamemode.info_board()

        ctx.font = "30px Lexend";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";

        localStorage.setItem("atom_field", JSON.stringify(string_atom_field()));
        localStorage.setItem("wincount", wincount.toString())

        ctx.fillText("Wins: "+wincount.toString(),920,960)

    },
}

function dist(p1, p2){
    let distanceX = p1[0] - p2[0];
    let distanceY = p1[1] - p2[1]
    return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
}

function circleFromHex(x,y){

    if (dist(RESET_COORDS,[x,y]) <= 40) { return 'reset'; }
    if (dist(INFO_COORDS,[x,y]) <= 40) { return 'info'; }

    for (let q = 0; q < 11; q++) {
        for (let r = 0; r < 12; r++){   
            let atomPosition = screenPosition(r, q, canvas);
            if (dist(atomPosition, [x,y]) <= 33) {
                return [r,q]
            }

        }
    }
    return null
}

canvas.addEventListener('click', function(event){

    const rect = canvas.getBoundingClientRect();
    
    const mouseX = (event.clientX - rect.left) / rect.width * canvas.width;
    const mouseY = (event.clientY - rect.top) / rect.height * canvas.height;

    let location = circleFromHex(mouseX, mouseY)

    if (location == 'reset'){
        myGameArea.reset()
    }
    else if (location == 'info'){
        showInfo = !showInfo;
    }
    else if (location != null){
        gamemode.post_click(location)
    }
    myGameArea.drawAtoms()
    gamemode.info_board(mouseX, mouseY, true)

}, false)

canvas.addEventListener('mousemove', function(event) {
    // Get mouse boundaries relative to the canvas layout viewport
    const rect = canvas.getBoundingClientRect();
    const mouseX = (event.clientX - rect.left) / rect.width * canvas.width;
    const mouseY = (event.clientY - rect.top) / rect.height * canvas.height;

    let location = circleFromHex(mouseX, mouseY)

    // Change cursor style based on hover condition
    if ((location != null && ((typeof location == 'string') || gamemode.is_selectable(location))) || gamemode.info_board(mouseX, mouseY, false)) {
        canvas.style.cursor = 'pointer'; // Hand icon
    } else {
        canvas.style.cursor = 'default'; // Regular arrow
    }
});