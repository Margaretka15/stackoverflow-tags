import {ITag} from "../interfaces/ITag";

const sortData = (data: ITag[] | undefined, sortOption: string): ITag[] => {
    if(data === undefined)
        return [];
    switch (sortOption) {
        case 'mostPopular':
            return data.sort((a, b) => b.count - a.count);
        case 'leastPopular':
            return data.sort((a, b) => a.count - b.count);
        case 'alphabetical':
            return data.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return data;
    }
};

export {sortData}