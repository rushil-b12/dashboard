import {writable} from "svelte/store";
import {browser} from "$app/env";

export const linksStore = writable(browser && JSON.parse(localStorage.getItem("links")) || []);
linksStore.subscribe(x => browser && localStorage.setItem("links", JSON.stringify(x)));