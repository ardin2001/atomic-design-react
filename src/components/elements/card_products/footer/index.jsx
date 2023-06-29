import Button from "../../button";

const CardFooter = ({price,popUp}) =>{
    return(
        <div className="flex items-center justify-between p-5">
            <span className="text-xl font-bold text-white">Rp.{price}</span>
            <Button classname="bg-blue-600" popUp={popUp}>Add To Cart</Button>
        </div>
    )
}
export default CardFooter;