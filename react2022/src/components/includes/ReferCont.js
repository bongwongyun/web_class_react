import React from 'react'
import { Link } from 'react-router-dom'

function ReferInfo({id, title, desc}){
  return (
        <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>
            <Link to={{
              pathname: "/reference-detail",
              state:{id,title,desc},
            }}>{desc.slice(0,100)}</Link></td>
        </tr>
               
  )
}
function ReferCont(props){
  return(
    <section className={`refer__cont ${props.color}`}>
          <div className="container">
            <div className={`refer__inner ${props.color}`}>
              <h2>CSS</h2>
              <table>
                <colgroup>
                  <col style={{width: "10%"}} />
                  <col style={{width: "20%"}} />
                  <col style={{width: "70%"}} />
                </colgroup>
                <tbody>
                  {props.refer.map((refer) => (
                    <ReferInfo
                        key={refer.id}
                        id={refer.id}
                        title={refer.title}
                        desc={refer.desc}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
  )
}
// function referCont() {
//   return (
//     <section className="refer__cont">
//       <div className="container">
//         <div className="refer__inner">
//           <h2>CSS</h2>
//           <table>
//             <colgroup>
//               <col style={{width: "10%"}} />
//               <col style={{width: "20%"}} />
//               <col style={{width: "70%"}} />
//             </colgroup>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>align-content</td>
//                 <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>align-items</td>
//                 <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>align-items</td>
//                 <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>align-items</td>
//                 <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>align-items</td>
//                 <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>align-items</td>
//                 <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   )
// }

export default ReferCont