import { CreateHash } from 'sha.js';


 
// console.log(shajs('sha256').update('42').digest('hex'))
// // => 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049
// console.log(new shajs.sha256().update('42').digest('hex'))
// // => 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049
 
// var sha256stream = shajs('sha256')
// sha256stream.end('42')
// console.log(sha256stream.read().toString('hex'))

export default function Portfolio(){
    return (
        <header className="j-header">
            <div>
                Jana Veliskova
            </div>
            <div sha512='a0b6a741d3a647f0f76ed9456b0a96300aafe27f72b9fbf4df0b859d74cbe9f2c7f74017e8a3f69b08f4d3be3b3e1c370e00e9f8cb3c5a26d2d4a01b4a9d522e'>
                <div>
                    TEST CONTENT
                </div>
            </div>

            
        </header>
    )
}
