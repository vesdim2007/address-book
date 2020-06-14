import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";
import { getUsers } from "../actions/users";
import reducer from "../reducers/users";
import users from "../fakeData";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("getUsers Action Creator", () => {
  it("getUsers Action Creator has correct type in its Action", () => {
    const action = getUsers();
    expect(action.type).toEqual("GET_USERS");
  });

  it("getUsers Action Creator returns correct payload in its Action", () => {
    const action = getUsers(users);
    expect(action.payload).toEqual(users);
  });
});

describe("Redux-Thunk working properly, dispatch returns associated Action Creators to ensure axios API call succesfully pulling data", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("tests", () => {
    const store = mockStore({ users: [] });

    const expectedActions = [{ type: "GET_USERS", payload: users }];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: users,
      });
      return store.dispatch(getUsers(request.response)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("Users Reducer", () => {
  it("should return the initial state", () => {
    expect(
      reducer(undefined, {
        users: [],
        nat: null,
        error: null,
      })
    ).toEqual({
      users: [],
      nat: null,
      error: null,
    });
  });

  it("should handle GET_USERS", () => {
    const successAction = {
      type: "GET_USERS",
      payload: users,
    };
    expect(reducer({ users: [] }, successAction)).toEqual({ users });
  });
});
