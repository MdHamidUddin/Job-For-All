import React  from "react";
function Table({ colNames, width='auto', height='auto'})
{
    return <div>
        {
           colNames.length>0 && (
               <table cellSpacing='0' style={{width:width,height:height ,padding:'5px 10px'}}>
                   <thead>
                       <tr>
                           {colNames.map((headerItems,index) =>(
                               <th key={index}>
                                        {headerItems.toUpperCase()}
                               </th>
                           ))}
                       </tr>
                   </thead>
                   <tbody>
                       {
                       Object.values(colNames).map((obj,index)=>(
                           <tr key={index}>
                                {Object.values(obj).map((value,index2)=>(
                                    <td key={index2}>{value}</td>
                                ))}
                           </tr>
                       ))}
                   </tbody>
               </table>
           ) 
        }
    </div>
}

export default Table;