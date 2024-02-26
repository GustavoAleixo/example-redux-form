import { useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

import { TStore, store } from "../store";
import {
  cleanFormState,
  setProductState,
} from "../store/actions/product-actions";

export function Product() {
  const navite = useNavigate();

  function handleSubmit() {
    const product = store.getState().product;
    cleanFormState();
    navite("/adsfasdf");
  }

  return (
    <div className="flex w-full justify-center">
      <form className="w-[50%] flex-col">
        <div className="flex flex-wrap -mx-3 mb-6">
          <InputNameComponent />
          <InputLastName />
        </div>
        <Rest />

        <div className="mt-12 flex justify-end w-full">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[210px]"
            onClick={handleSubmit}
          >
            Button
          </button>
        </div>
      </form>
    </div>
  );
}

const InputNameComponent = () => {
  const name = useSelector<TStore, TStore["product"]["name"]>(
    (state) => state.product.name,
    shallowEqual
  );

  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        First Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-first-name"
        type="text"
        placeholder="Jane"
        value={name}
        onChange={(event) =>
          setProductState({
            field: "name",
            value: event.currentTarget.value,
          })
        }
      />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
  );
};

const InputLastName = () => {
  const lastName = useSelector<TStore, TStore["product"]["lastName"]>(
    (state) => state.product.lastName,
    shallowEqual
  );

  return (
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Last Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-last-name"
        type="text"
        placeholder="Doe"
        value={lastName}
        onChange={(event) =>
          setProductState({
            field: "lastName",
            value: event.currentTarget.value,
          })
        }
      />
    </div>
  );
};

const Rest = () => {
  const city = useSelector<TStore, TStore["product"]["city"]>(
    (state) => state.product.city,
    shallowEqual
  );

  const password = useSelector<TStore, TStore["product"]["password"]>(
    (state) => state.product.password,
    shallowEqual
  );

  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(event) =>
              setProductState({
                field: "password",
                value: event.currentTarget.value,
              })
            }
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            City
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
            value={city}
            onChange={(event) =>
              setProductState({
                field: "city",
                value: event.currentTarget.value,
              })
            }
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            State
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Zip
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="90210"
          />
        </div>
      </div>
    </>
  );
};
