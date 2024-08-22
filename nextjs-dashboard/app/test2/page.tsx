import Card from '@/app/ui/test2/card';

export default function skeletons(){
    return(
        <div>
            <div className="text-xl mb-9">Dash baord</div>
            <div className="flex space-x-5">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}