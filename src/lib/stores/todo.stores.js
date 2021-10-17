import {writable} from "svelte/store";
import {browser} from "$app/env";

export const todoStore = writable(browser && JSON.parse(localStorage.getItem("todos")) || []);
todoStore.subscribe(x => browser && localStorage.setItem("todos", JSON.stringify(x)));