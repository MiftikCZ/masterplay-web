import dbfile from "../../public/database.json"

let data:(typeof dbfile)

export async function importDatas() {
    const res = await fetch('/database.json')
    data = await res.json()
}

export default async function () {
    if(!data) {
        await importDatas()
    }
    return data
}