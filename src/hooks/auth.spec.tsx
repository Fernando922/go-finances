import { renderHook, act } from "@testing-library/react-hooks";
import { mocked } from "ts-jest/utils";
import fetchMock from "jest-fetch-mock";
import { startAsync } from "expo-auth-session";

import { AuthProvider, useAuth } from "./auth";

fetchMock.enableMocks();

jest.mock("expo-auth-session");

const userTest = {
  id: "any_id",
  email: "john.doe@email.com",
  name: "John Doe",
  photo: "any_photo.png",
};

describe("Auth Hook", () => {
  it("should be able to sign in with Google account existing", async () => {
    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValueOnce({
      type: "success",
      params: {
        access_token: "any_token",
      },
    });

    fetchMock.mockResponseOnce(JSON.stringify(userTest));

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user.email).toBe(userTest.email);
  });

  it("User should not connect if cancel authentication with Google", async () => {
    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValueOnce({
      type: "cancel",
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).not.toHaveProperty("id");
  });
});
