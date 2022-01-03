import React from "react"

export default function Main(){
    return(
      <main>
          <h1 className='main--title'>Fun facts about React</h1>
          <ul className="main--facts">
              <li>
                React is a JavaScript-based UI development library.</li> 
              <li>Was originally created by Jordan Walke.</li>
              <li>React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.</li>
              <li>It is maintained by Facebook.</li>
              <li>Powers thousands of enterprise apps, including mobile apps.</li>
              <li>React is a tool for building UI components</li>
              <li>It is declarative in nature</li>    
          </ul>
         </main>
    )
  }