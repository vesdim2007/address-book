import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeHeader from "./headers/HomeHeader";
import Loader from "./reusable/Loader";
import { SLayout } from "./styles/Layout.style";
import { SMessage } from "./styles/Home.style";
import { fetchUsers, fetchNationalUsers } from "./actions/users";
import UserListItem from "./reusable/UserListItem";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const { users, error, nat } = useSelector((state) => state);
  const dispatch = useDispatch();

  const getData = () => {
    setLoading(true);
    if (nat) {
      setTimeout(() => {
        dispatch(fetchNationalUsers(page, nat));
        setLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch(fetchUsers(page));
        setLoading(false);
      }, 1000);
    }
    setPage(page + 1);
  };

  useEffect(() => {
    if (page === 0) {
      getData();
    }
  });

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.offsetHeight
    ) {
      return;
    }
    if (page < 20) {
      getData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchMatch = (user) => {
    return (
      user.name.first.toLowerCase() === searchTerm.toLowerCase() ||
      user.name.last.toLowerCase() === searchTerm.toLowerCase()
    );
  };

  const renderUser = (user, idx) => {
    if (searchTerm === "" || handleSearchMatch(user)) {
      return <UserListItem key={idx} user={user} />;
    }
  };

  return (
    <>
      <HomeHeader value={searchTerm} onChange={onChangeSearch} />
      <SLayout>
        <h1>Users Catalog</h1>
        <div style={{ marginTop: users.length > 0 ? 20 : 0 }}>
          {users.length > 0 && nat
            ? users
                .filter((u) => u.nat.toLowerCase() === nat)
                .map((u, i) => renderUser(u, i))
            : users.map((u, i) => renderUser(u, i))}
        </div>
        {loading && <Loader />}
        {error && (
          <div style={{ background: "#ff0000", color: "#ffffff" }}>{error}</div>
        )}
        {!loading && users.length === 1000 && (
          <SMessage>End of users catalog</SMessage>
        )}
      </SLayout>
    </>
  );
};

export default Home;
