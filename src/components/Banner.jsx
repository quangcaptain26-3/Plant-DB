import { Button, Card, Flex, Typography } from "antd";
import React from "react";

const Banner = () => {
  return (
    <Card style={{ height: 260, padding: "20px" }}>
      <Flex vertical gap="30px">
        <Flex vertical align="flex-start">
          <Typography.Title level={2} strong>
            Create and sell product
          </Typography.Title>
          <Typography.Text type="secondary" strong>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ipsam
            placeat vel dolore delectus quasi exercitationem voluptatem, hic
            tempora deleniti facilis in reprehenderit voluptate accusantium ut?
            Provident exercitationem velit quisquam!
          </Typography.Text>
        </Flex>

        <Flex gap="large">
          <Button type="primary" size="large">
            Explore More
          </Button>

          <Button size="large">TopSellers</Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Banner;
