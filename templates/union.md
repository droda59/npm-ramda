Combines two lists into a set (i.e. no duplicates) composed of the elements
of each list.

@func
@memberOf R
@since v0.1.0
@category Relation
@sig [*] -> [*] -> [*]
@param {Array} as The first list.
@param {Array} bs The second list.
@return {Array} The first and second lists concatenated, with
        duplicates removed.
@example

     R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
