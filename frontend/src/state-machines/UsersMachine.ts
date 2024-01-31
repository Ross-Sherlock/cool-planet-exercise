import { assign, createMachine } from "xstate";
import { UsersContext } from "../contexts/UsersContext";
import getUsersList from "../data-fetchers/getUsersList";

export const usersMachine = createMachine<UsersContext>(
  {
    id: "usersMachine",
    initial: "loading",
    context: {
      users: null,
      errorMessage: null,
    },
    states: {
      loading: {
        invoke: {
          src: "fetchUsers",
          onDone: {
            target: "success",
            actions: assign({ users: (_, event) => event.data }),
          },
          onError: {
            target: "failure",
            actions: assign({ errorMessage: (_, event) => event.data }),
          },
        },
      },
      success: {},
      failure: {
        on: {
          RETRY: {
            target: "loading",
          },
        },
      },
    },
  },
  {
    services: {
      fetchUsers: () => getUsersList(),
    },
  }
);
