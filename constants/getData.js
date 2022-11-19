const getData = async (search) => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes/?q=${search}&country=US`
    );
    const data = res.json();
    return data;
  } catch (err) {
    // if any error, Code throws the error
    return err;
  }
};

export default { getData };
