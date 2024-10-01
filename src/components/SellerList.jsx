import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from "antd";
import React from "react";

const SellerList = () => {
  return (
    <Flex align="center" justify="space-between" gap="large">
      <Flex vertical="row" gap="small" className="top-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Top Seller
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              maxCount={5}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "progress",
              }}
            >
              <Tooltip title="User1" placement="top">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGyOaB2sKoyH68FKVB3iV6xGByS3LHjfuoU6N4vphmA&s" />
              </Tooltip>

              <Tooltip title="User2" placement="top">
                <Avatar src="https://static.vecteezy.com/system/resources/previews/002/002/297/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" />
              </Tooltip>

              <Tooltip title="User3" placement="top">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfeBWuSJ1U87XAeDrNRsLlTU-UB55LY6JmU8aW_bVxiQ&s" />
              </Tooltip>

              <Tooltip title="User4" placement="top">
                <Avatar src="https://cdn-icons-png.flaticon.com/512/194/194938.png" />
              </Tooltip>

              <Tooltip title="User5" placement="top">
                <Avatar src="https://cdn-icons-png.freepik.com/512/147/147142.png" />
              </Tooltip>

              <Tooltip title="User6" placement="top">
                <Avatar src="https://cdn-icons-png.freepik.com/512/147/147142.png" />
              </Tooltip>

              <Tooltip title="User7" placement="top">
                <Avatar src="https://cdn-icons-png.freepik.com/512/147/147142.png" />
              </Tooltip>
            </Avatar.Group>

            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              <Typography.Text type="secondary" strong>
                1, 2000 plant sold
              </Typography.Text>
              <Typography.Text type="secondary" strong>
                10 sellers
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>

      <Flex vertical="row" gap="small" className="featured-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Featured Seller
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              maxCount={5}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "progress",
              }}
            >
              <Tooltip title="User1" placement="top">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGyOaB2sKoyH68FKVB3iV6xGByS3LHjfuoU6N4vphmA&s" />
              </Tooltip>

              <Tooltip title="User2" placement="top">
                <Avatar src="https://static.vecteezy.com/system/resources/previews/002/002/297/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" />
              </Tooltip>

              <Tooltip title="User3" placement="top">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfeBWuSJ1U87XAeDrNRsLlTU-UB55LY6JmU8aW_bVxiQ&s" />
              </Tooltip>

              <Tooltip title="User4" placement="top">
                <Avatar src="https://cdn-icons-png.flaticon.com/512/194/194938.png" />
              </Tooltip>

              <Tooltip title="User5" placement="top">
                <Avatar src="https://cdn-icons-png.freepik.com/512/147/147142.png" />
              </Tooltip>

              <Tooltip title="User6" placement="top">
                <Avatar src="https://cdn-icons-png.freepik.com/512/147/147142.png" />
              </Tooltip>

              <Tooltip title="User7" placement="top">
                <Avatar src="https://cdn-icons-png.freepik.com/512/147/147142.png" />
              </Tooltip>
            </Avatar.Group>

            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              <Typography.Text type="secondary" strong>
                1, 530 plant sold
              </Typography.Text>
              <Typography.Text type="secondary" strong>
                16 sellers
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default SellerList;
