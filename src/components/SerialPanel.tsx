import { Select, Button } from "antd";
import * as React from 'react';

const SerialPanel: React.FC = () => {
    const onClick: any = async () => {
        try {
            const port = await navigator.serial.requestPort();
        } catch (e) {

        }
    }
    return (
        <>
            <Select onClick={ onClick }></Select>
            <Button>Disconnect</Button>
        </>
    );
};

export default SerialPanel;