import { Layout, Header, Breadcrumb, Footer } from "@jx3box/jx3box-ui-react";
import DemoCalculator from "@/components/demo-calculator";

const { LeftSidebar, Main, RightSidebar } = Layout;

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
  <Layout>
    <Header />
    <Breadcrumb name="频道名称" slug="slug" root="/slug">
      bread info
    </Breadcrumb>

    <LeftSidebar>LeftSidebar</LeftSidebar>

    <Main>
      <DemoCalculator />
      <RightSidebar>RightSidebar</RightSidebar>
      <Footer />
    </Main>
  </Layout>
);

export default Home;
