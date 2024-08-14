import { Attributes } from "react";

export default function Page(){
    return (
        <div>
            <Header title="React"/>
        </div>
    )

}
function Header({title}: HeaderProps){
    console.log(title);
    console.log('wowowowowwo');
    //return <h1>test wow {title}</h1>;
    return <h1>{`wow!!! ${title}`}</h1>
}

interface HeaderProps {
    title: string;
  }