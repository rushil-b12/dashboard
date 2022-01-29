import { supabase } from "$lib/db"

export const todos = {
    async get() {
        const { data, error } = await supabase.from("todos").select("*")
        if (error) {
            console.log(error)
        }
        return data
    }, async post(payload) {
        const { data } = await supabase.from("todos").insert(payload)
        return data
    }, async update(payload) {
        const { data } = await supabase.from("todos").upsert(payload)
        return data
    }, async delete(id) { 
        const { data } = await supabase.from("todos").delete().match({id:id})
        return data 
    }
}