
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       

export default function DynamicDemo() {
    const categories = [
        { name: 'Australia', key: 'A' },
        { name: 'Mermuda', key: 'M' },
        { name: 'Canada', key: 'P' },
        { name: 'Cameroom', key: 'R' },
        { name: 'France', key: 'R' },
        { name: 'Finland', key: 'R' },
        { name: 'Germany', key: 'R' },
        { name: 'Haiti', key: 'R' },
        { name: 'Iceland', key: 'R' },
        { name: 'India', key: 'R' },
        { name: 'Japan', key: 'R' },
        { name: 'Kenya', key: 'R' },

        { name: 'Laos', key: 'R' },
        { name: 'Lebanon', key: 'R' },
        { name: 'Malaysia', key: 'R' },
        { name: 'Maldives', key: 'R' },
        { name: 'Nepal', key: 'R' },
        { name: 'Netherlands', key: 'R' },
        { name: 'Norway', key: 'R' },
        { name: 'Pakistan', key: 'R' },
        { name: 'Qatar', key: 'R' },
        { name: 'Romania', key: 'R' },
        { name: 'Samoa', key: 'R' },
        { name: 'Serbia', key: 'R' },
        { name: 'Thailand', key: 'R' },
        { name: 'Ukraine', key: 'R' },
        { name: 'Vietnam', key: 'R' },
        { name: 'Yemen', key: 'R' },
        { name: 'Zambia', key: 'R' },

        



    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };
   
    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center" style={{marginBottom:'20px', alignItems:'center'}}  >
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange}  checked={selectedCategories.some((item) => item.key === category.key)} />
                            <label htmlFor={category.key} className="ml-2">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
        
// import React from 'react'
// import "./ho.js";
// <script>
//   {/* alert("jjhiuh"); */}
//   {/* const helloW(){
//       alert("bhb")
//     } */}
// </script>
// const home = () => {
//   // <script>
//     // const helloW=(hj)=>{
//     //   alert("bhb");
//     // }
//   // </script>
//   return (
//     <div>
//       bhjbjhbjh
//       <button onClick={myTry}>hello</button>
//     </div>
//   )
// }

// export default home;
