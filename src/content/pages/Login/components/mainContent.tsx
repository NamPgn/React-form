import { forwardRef, FC } from "react";
import { Link } from "react-router-dom";
import { usernameRule, passwordRule } from '../rules';
import styled from 'styled-components';

import signinbg from "src/assets/images/download.png";
interface iRecipeProps {
  onFinish: any;
  onFinishFailed: any;
  setRemember: any;
}

const Container = styled.div`
  max-width:1140px;
  margin:0 auto;
`

const LogoContent = styled.div`
  display: flex;
  justify-content: center;
`

const LogoItem = styled.img`
  max-width:200px;
  width:100%;
  object-fit: cover;
`

const Doc = styled.div`
  margin:50px 0 20px 0;
`
const DocItem = styled.div`

`

const DocContent = styled.div`
  display: flex;
  gap: 0 20px;
`

const DocTitle = styled.h2`

`

const DocBlog = styled.div`
  width:25%;
  border:1px solid #999;
  padding:15px;
`
const DocBlogTitle = styled.h3`
`
const DocBlogText = styled.p`
  margin:15px 0;  
`

const Btn = styled.button`

`

const Sider = styled.div`
  width:50%;
`
const SiderItem = styled.div``
const SiderImage = styled.img`
  width:100px;
  height:100px;
  border:1px solid #fff;
`
const SiderText = styled.p`
  text-align:center;
  font-size:11px !important;
`
const SiderContent = styled.div`
  display: flex;
  gap: 35px;
`
const LoginContent = styled.div`
  width:50%;
`
const LoginItem = styled.div``
const LoginButton = styled.button`
height: 50px;
background: #ffb800;
border-radius: 5px;
width: 50%;
border: 1.5px solid #9996;
`
const LoginInput = styled.input`
`
const LoginTitle = styled.h3`
  text-align: center;
`

const Login = styled.div`
  margin:100px 0;
  display: flex;
  gap:0 55px;
`
const DivSltyled = styled.div`
  display: flex;
  gap: 0 20px;
  align-items: end;
`
const Footer = styled.div`
  margin-top:100px;
`;
const FtImage = styled.img`
`;
const FtCopyright = styled.div`
text-align: center;
`
const MainContent: FC<iRecipeProps> = forwardRef(({
  onFinish,
  onFinishFailed,
  setRemember
}, ref): JSX.Element => {
  return (
    <>


      {/* <Layout className="" style={{ height: "100vh" }}>
        <Row justify="space-around" style={{ height: "100%" }}>
          <Col
            md={{ span: 12 }}
          >
            <div style={{ padding: 30 }}>
              <Title className="mb-15">Sign In</Title>
              <Title className="font-regular text-muted" level={5}>
                Enter your email and password to sign in
              </Title>
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Form.Item
                  hasFeedback
                  className="username"
                  label="Email"
                  name="email"
                  rules={usernameRule}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  className="password"
                  label="Password"
                  name="password"
                  rules={passwordRule}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item
                  name="remember"
                  className="aligin-center"
                  valuePropName="checked"
                >
                  <Switch defaultChecked onChange={setRemember} />
                  Remember me
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    SIGN IN
                  </Button>
                </Form.Item>
                <p className="font-semibold text-muted">
                  Don't have an account?{" "}
                  <Link to="/sign-up" className="text-dark font-bold">
                    Sign Up
                  </Link>
                </p>
              </Form>
            </div>
          </Col>
          <Col
            className="sign-img"
            style={{ padding: 12, backgroundImage: `url(${signinbg})`, backgroundSize: 'cover' }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
          >
          </Col>
        </Row>
      </Layout> */}
      <Container>
        <LogoContent>
          <LogoItem src={signinbg} />
        </LogoContent>
        <Doc>
          <DocItem>
            <DocTitle>
              Danh sách dịch vụ
            </DocTitle>
            <DocContent>
              <DocBlog>
                <DocBlogTitle>Elerning</DocBlogTitle>
                <DocBlogText>Giải pháp quản lý lộ trình giảng dạy / học tập cho doanh nghiệp</DocBlogText>
                <div style={{ textAlign: "end" }}>
                  <Btn className='button'>Sử dụng</Btn>
                </div>
              </DocBlog>
              <DocBlog>
                <DocBlogTitle>Elerning</DocBlogTitle>
                <DocBlogText>Giải pháp số hóa quản lý tài liệu cho doanh nghiệp</DocBlogText>
                <div style={{ textAlign: "end" }}>
                  <Btn className='button'>Sử dụng</Btn>
                </div>
              </DocBlog>
            </DocContent>
          </DocItem>
        </Doc>
        <Login>
          <Sider>
            <h3>Có thể bạn sẽ cần</h3>
            <SiderContent>
              <SiderItem>
                <SiderImage src='' />
                <SiderText>
                  eHRM
                </SiderText>
              </SiderItem>
              <SiderItem>
                <SiderImage src='' />
                <SiderText>
                  eAsset
                </SiderText>
              </SiderItem>
              <SiderItem>
                <SiderImage src='' />
                <SiderText>
                  eCollaboration
                </SiderText>
              </SiderItem>
            </SiderContent>
          </Sider>
          <LoginContent>
            <LoginTitle>Đăng ký tư vấn</LoginTitle>
            <LoginItem>
              <div className="coolinput">
                <label className="text">Name:</label>
                <input type="text" placeholder="Write here..." name="input" className="input" />
              </div>
              <div className="coolinput">
                <label className="text">Name:</label>
                <input type="text" placeholder="Write here..." name="input" className="input" />
              </div>
              <DivSltyled>
                <div className="coolinput select">
                  <label className="text">Name:</label>
                  <select className="input">
                    <option value="0" >1</option>
                  </select>
                </div>
                <LoginButton >Gửi thông tin</LoginButton>
              </DivSltyled>
            </LoginItem>
          </LoginContent>
        </Login>
        <Footer>
          <div className="border"></div>
          <FtImage src={signinbg} />
          <div className="border"></div>
          <FtCopyright>Bản quyền</FtCopyright>
        </Footer>
      </Container>
    </>
  );
});

export default MainContent;