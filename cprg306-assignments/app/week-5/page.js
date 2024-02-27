import Itemlist from "./item-list";

export default function Page(){
    return(
        <main className="container mx-auto p-8">
            <h2 class="text-4xl font-bold mb-8">Shopping List</h2>
            <Itemlist></Itemlist>
        </main>
    );
}