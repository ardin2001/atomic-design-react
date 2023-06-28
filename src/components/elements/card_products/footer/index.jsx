import Button from "../../button";

const CardFooter = () =>{
    return(
        <div className="flex items-center justify-between p-5">
            <span className="text-xl font-bold text-white">Rp.500.000</span>
            <Button classname="bg-blue-600">Add To Cart</Button>
        </div>
    )
}
export default CardFooter;