import type {Meta, StoryObj} from '@storybook/react';
import PaginationPanel from "../components/PaginationPanel";
import {fn} from "@storybook/test";


const meta = {
    title: 'Pagination',
    component: PaginationPanel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} as Meta<typeof PaginationPanel>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Example: Story = {
        args: {
            totalPages: 15,
            page: 3,
            callback: fn()
        }
    }

;

