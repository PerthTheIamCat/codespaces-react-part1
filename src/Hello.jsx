import './Hello.css'

// export default function Hello() {
//     let name="Pawit Thongkum"
//     return (
//         <>
//             <h1>Hello World {name}</h1>
//             <hr/>
//         </>
//     )
// }

// const Hello = function(prop) {
//     return (
//         <>
//             <h1>Hello World {prop.name+"!!!"}</h1>
//         </>
//     );
// }
// export default Hello;

const Hello = prop => <><h1>Hello World {prop.firstname} {prop.lastname}</h1></>
export default Hello;