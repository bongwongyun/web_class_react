import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

function ReferCont({id,title,desc,use,desc2,element,tag,version,view,image,link,Definition,Accessibility,mdn,w3c}) {
    return (
      <li>
        <Link to={{
          pathname:"reference-detail",
          state:{id,title,desc,use,desc2,element,tag,version,view,image,link,Definition,Accessibility,mdn,w3c}
        }}>
          <span className='num'>{id}</span>
          <span className='title'>{title}</span>
          <span className='desc'>{desc}</span>
          <span className='use'>{use}</span>
        </Link>
      </li>
    )
}
ReferCont.prototype = {
  id:propTypes.number.isRequired,
  title:propTypes.string.isRequired,
  desc:propTypes.string.isRequired,
  use:propTypes.string.isRequired,
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