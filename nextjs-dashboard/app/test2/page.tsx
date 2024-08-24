import Card from '@/app/ui/test2/card';
import Graph from '@/app/ui/test2/graph';

export default function skeletons(){
    return(
        <div>
            <div className="text-xl mb-9">Dash baord</div>
            <div className="lg:flex lg:space-x-5 grid-cols-2 grid gap-5">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className='text-xl mt-8'>
                Recent Revenue

            </div>
            <Graph></Graph>
        </div>
    )
}