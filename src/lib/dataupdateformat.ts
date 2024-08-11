export default function dataUpdateFormat(data: {}){
    const str = Object.entries(data).map(([key, value]) => `${key} = '${value}'`).join(', ')
    return str 
}