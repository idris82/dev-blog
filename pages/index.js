import {
  Badge,
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/layout";
import Head from "next/head";
import Image from "next/image";
import ColorModeSwitcher from "../components/ColorModeSwitcher";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Flex position="absolute" top="0" width="100%" justify="flex-end">
        <ColorModeSwitcher />
      </Flex>
      <Box flex="1" p="10">
        <Container maxW="4xl">
          <Heading size="xl" mb="20">
            개발자 채호경입니다.
          </Heading>
          <Heading size="lg" mt="20" mb="5">
            🧑🏻‍💻 About Me
          </Heading>
          <Divider />
          <HStack mt="3" alignItems="flex-start">
            <Box flex="1">
              <Text>Introduction</Text>
            </Box>
            <Box flex="2">
              <UnorderedList>
                <ListItem>안녕하세요, 2년차 Web 개발자 채호경입니다.</ListItem>
                <ListItem>Web Frontend 기술에 관심이 많습니다.</ListItem>
                <ListItem>매일 성장하기 위해 꾸준히 노력합니다. </ListItem>
                <ListItem>
                  Test Code 작성을 실천하려고 노력하지만, 의존하지는 않습니다.
                </ListItem>
                <ListItem>
                  언젠가 메인 editor로 Vim을 사용하기 위해서 연습중입니다.
                </ListItem>
                <ListItem>
                  🍺 맥주와 ⌨️ 키보드라는 취미를 가지고 있으며, 최근에는 🏍
                  클래식 바이크에 입문하여 라이더 생활을 도전하고있습니다.
                </ListItem>
              </UnorderedList>
            </Box>
          </HStack>
          <HStack mt="3" alignItems="flex-start">
            <Box flex="1">
              <Text>Contact & Channel</Text>
            </Box>
            <Box flex="2">
              <List>
                <ListItem>
                  <Badge variant="solid" colorScheme="green">
                    ✉️ Email
                  </Badge>
                  <Text ml="2" as="span">
                    hokyung.chae@gmail.com
                  </Text>
                </ListItem>
              </List>
            </Box>
          </HStack>
          <Heading size="lg" mt="20" mb="5">
            🛠 Skills
          </Heading>
          <Divider />
          <HStack mt="3" alignItems="flex-start">
            <Box flex="1">
              <Text>Frontend</Text>
            </Box>
            <Box flex="2">
              <UnorderedList>
                <ListItem>
                  HTML5, CSS3, Javascript(ES6+), DOM에 대한 지식을 보유하고
                  있습니다.
                </ListItem>
                <ListItem>
                  React, Angular등의 Front-end Framework를 활용합니다.
                </ListItem>
                <ListItem>
                  Webpack, parcel등의 Web Bundler의 동작에 대해 이해하고
                  있습니다.{" "}
                </ListItem>
                <ListItem>
                  Redux와 react-query를 적절히 같이 사용하는 것을 선호합니다.
                </ListItem>
                <ListItem>Typescript 도입을 우선적으로 검토합니다.</ListItem>
                <ListItem>
                  TDD (테스트 주도 개발) 방법론에 대해 이해하고 소프트웨어
                  개발에 활용할 수 있다.
                </ListItem>
                <ListItem>
                  표준 기술과 웹접근성에 대한 이해를 가지고 있습니다.
                </ListItem>
              </UnorderedList>
            </Box>
          </HStack>
          <HStack mt="3" alignItems="flex-start">
            <Box flex="1">
              <Text>Backend</Text>
            </Box>
            <Box flex="2">
              <UnorderedList>
                <ListItem>Node.js, express.js</ListItem>
                <ListItem>Sequelize</ListItem>
                <ListItem>Postgresql, MongoDB</ListItem>
              </UnorderedList>
            </Box>
          </HStack>
          <HStack mt="3" alignItems="flex-start">
            <Box flex="1">
              <Text>DevOps</Text>
            </Box>
            <Box flex="2">
              <UnorderedList>
                <ListItem>AWS EC2, S3, RDS, CloudFront, Route 53</ListItem>
                <ListItem>Postgresql, MongoDB</ListItem>
                <ListItem>Travis CI, Github Action</ListItem>
              </UnorderedList>
            </Box>
          </HStack>
          <HStack mt="3" alignItems="flex-start">
            <Box flex="1">
              <Text>Collaboration Tool</Text>
            </Box>
            <Box flex="2">
              <UnorderedList>
                <ListItem>Git, Github</ListItem>
                <ListItem>Jira & Confluence Wiki </ListItem>
                <ListItem>Slack, Zeplin, Figma</ListItem>
              </UnorderedList>
            </Box>
          </HStack>
          <Heading size="lg" mt="20" mb="5">
            💻 Work Experience & Projects
          </Heading>
          <Divider />
          <HStack mt="3" alignItems="flex-start">
            <Box flex="1">
              <Text>에스브이</Text>
              <Text fontSize="xs">2020.02 ~ 2021.05</Text>
              <Text fontSize="xs">산업기능요원 복무</Text>
            </Box>
            <Box flex="2">
              <UnorderedList>
                {/* <ListItem>산업기능요원으로 복무</ListItem> */}
              </UnorderedList>
            </Box>
          </HStack>
          <HStack mt="3" alignItems="flex-start">
            <Box flex="1">
              <Text>웹 에이전시</Text>
              <Text fontSize="xs">2019.03 ~ 2020.02</Text>
              <Text fontSize="xs">산업기능요원 복무</Text>
            </Box>
            <Box flex="2">
              <UnorderedList>
                {/* <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem> */}
              </UnorderedList>
            </Box>
          </HStack>
          <HStack mt="3" alignItems="flex-start">
            <Box flex="1">
              <Text>타운컴퍼니</Text>
              <Text fontSize="xs">2018.08 ~ 2018.12</Text>
              <Text fontSize="xs">산업기능요원 복무</Text>
            </Box>
            <Box flex="2">
              <UnorderedList>
                {/* <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem> */}
              </UnorderedList>
            </Box>
          </HStack>
          <HStack mt="3" alignItems="flex-start">
            <Box flex="1">
              <Text>ncsoft</Text>
              <Text fontSize="xs">2018.04 ~ 2018.08</Text>
              <Text fontSize="xs">인턴</Text>
            </Box>
            <Box flex="2">
              <UnorderedList>
                {/* <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem> */}
              </UnorderedList>
            </Box>
          </HStack>
          <Heading size="lg" mt="20" mb="5">
            🎓 Education
          </Heading>
          <Divider />
          <HStack mt="3" alignItems="flex-start">
            <Box flex="1">
              <Text fontSize="md">고려대학교 컴퓨터학과</Text>
              <Text fontSize="xs">2015.03 ~ 2021.08</Text>
            </Box>
            <Box flex="2">
              <UnorderedList></UnorderedList>
            </Box>
          </HStack>
          <Heading size="lg" mt="20" mb="5">
            🏠 Personal Experience & Projects
          </Heading>
          <Divider />
          <HStack mt="3" alignItems="flex-start">
            <Box flex="1">
              <Text>TBD</Text>
            </Box>
            <Box flex="2">
              {/* <UnorderedList>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList> */}
            </Box>
          </HStack>
          <Heading size="lg" mt="20" mb="5">
            ✏️ Presentation & Article
          </Heading>
          <Divider />
          <HStack mt="3" alignItems="flex-start">
            <Box flex="1">
              <Text>TBD</Text>
            </Box>
            <Box flex="2">
              {/* <UnorderedList>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList> */}
            </Box>
          </HStack>

          <Heading size="lg" mt="20" mb="5">
            🏅 Certificate
          </Heading>
          <Divider />
          <HStack mt="3" alignItems="flex-start">
            <Box flex="1">
              <Text>TBD</Text>
            </Box>
            {/* <Box flex="2">
              <UnorderedList>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </Box> */}
          </HStack>
        </Container>
      </Box>
    </Flex>
  );
}
