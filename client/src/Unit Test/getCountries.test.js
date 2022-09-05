import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import { MockedProvider } from "@apollo/client/testing";
import { GET_COUNTRIES } from "../Components/graphql/queries";
import Home from '../Pages/Home/index';


beforeEach(() => {
    window.history.pushState({}, '/countries');
});

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

describe("Data from Apollo GraphQL API retrieved", () => {

    render(<Home />);
    const mocks = [
        {
            request: {
                query: GET_COUNTRIES,
            },
            result: {
                data: {
                    countries: {

                    }
                }
            }
        }
    ];
    const GetCountries = screen.getByTestId("getCountries");
    const loadingIcon = screen.getByTestId("loadingIcon");


    it("should render countries", async () => {
        const mock = {
          request: {
            query: GET_COUNTRIES,
          },
          result: {
            data: { 
                countries: {

                }
             }
          }
        };
        render(
          <MockedProvider mocks={[mock]} addTypename={false}>
            <GetCountries />
          </MockedProvider>
        );
        expect(loadingIcon).toBeInTheDocument();
        // expect(await screen.findByText("Buck is a poodle")).toBeInTheDocument();
      });

    // // Test 1
    // test("GetCountries renders", () => {
    //     expect(GetCountries).toBeInTheDocument();
    // })

    // // Test 2
    // test("loading gif", () => {
    //     expect(loadingIcon).toBeInTheDocument();
    //     expect(loadingIcon).toHaveAttribute("background-image", "url(stars.gif)")
    // })
    // // Test 3
    // test("GetCountries background changes to solid color on Home page", () => {
    //     const newUrl = '/countries';
    //     expect(GetCountries).toHaveAttribute("background-image", "null)")
    // })
})
