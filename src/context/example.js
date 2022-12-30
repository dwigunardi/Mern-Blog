import { createContext, useState } from "react";


export const ExampleContext = createContext({
    name: true
})

export const ExampleProvider = ({children}) => {
    //do something
    const [isAuthenticate, setAuthenticated] = useState(false)
    const Data = {
        setter : setAuthenticated,
        status : isAuthenticate,
        AuthenticationUser : [
        {
          username: "admin",
          password: "admin",
        },
      ]
    }

    return <ExampleContext.Provider value={Data}>{children}</ExampleContext.Provider>
}