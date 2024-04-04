import type {Meta, StoryObj} from '@storybook/react';
import TagList from "../components/TagList";

const tags = [
    {
        "count": 2529328,
        "name": "javascript"
    },
    {

        "count": 2192977,
        "name": "python"
    },
    {

        "count": 1917581,
        "name": "java"
    },
    {

        "count": 1615338,
        "name": "c#"
    },
]
const meta = {
    title: 'Tag list',
    component: TagList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} as Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Example: Story = {
    args: {
        tags: tags,

    },
};

