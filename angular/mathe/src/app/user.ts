import { Aufgabe } from "./aufgabe";

export class User {
    id: number;
    name: string;
    right: number;
    wrong: number;
    todo: Aufgabe[];
    done: Aufgabe[];
}