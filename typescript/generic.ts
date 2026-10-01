function abc<S, N>(val1:S, val2:N):[S,N] {
    return [val1, val2]
}

console.log(abc<string, number>('John',28));
console.log(abc<number, boolean>(28,false));

//Function overload | overriding