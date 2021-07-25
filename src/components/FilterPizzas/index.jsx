import { Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';



const FilterPizzas = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                >
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                >
                    3rd menu item
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Space direction="vertical">
                <Space wrap>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <a >
                            bottomRight <DownOutlined />
                        </a>
                    </Dropdown>
                </Space>
            </Space>
        </div >
    )
}

export default FilterPizzas