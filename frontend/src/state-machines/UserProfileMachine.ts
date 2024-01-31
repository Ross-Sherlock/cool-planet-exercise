import { assign, createMachine } from "xstate";
import { UserContext } from "../contexts/UserContext";
import getUserProfile from "../data-fetchers/getUserProfile";

export const userProfileMachine = (userId: string) =>
  createMachine<UserContext>(
    {
      id: "userProfileMachine",
      initial: "loading",
      context: {
        user: null,
        error: null,
        userId: userId,
      },
      states: {
        loading: {
          invoke: {
            src: "fetchUser",
            onDone: {
              target: "success",
              actions: assign({ user: (_, event) => event.data }),
            },
            onError: {
              target: "failure",
              actions: assign({ error: (_, event) => event.data }),
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
        fetchUser: (context) => getUserProfile(context.userId),
      },
    }
  );
