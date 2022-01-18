import { StatusCodes } from "../enums/StatusCodes";
import HttpException from "../exceptions/HttpException";

export default function HandleErrors(target: any, propertyKey: string, descriptor: PropertyDescriptor)
{
    const original = descriptor.value;
    descriptor.value = function (...args:any) {
        try 
        {
            original.apply(target, args)
        }
        catch (err) 
        {
            setLog(err);
            throw err;
        }
    }
}

function setLog(err: any)
{
    const timeStamp = `${new Date().toUTCString()} - ERROR:`;
    const debugError = <HttpException> err;
            if(debugError.statusCode)
            {
                console.log(`${timeStamp} ${StatusCodes[debugError.statusCode]} [${debugError.statusCode}] - ${debugError.message}.`);
            } else {
                console.log (`${timeStamp} Internal Server Error [500] - ${debugError.message}.`)
            }
}

