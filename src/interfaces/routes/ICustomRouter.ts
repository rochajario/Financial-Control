import { Router } from "express";

export interface ICustomRouter 
{
    getConfiguration():Router
}