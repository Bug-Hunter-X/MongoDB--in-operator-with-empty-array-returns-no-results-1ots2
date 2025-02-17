# MongoDB $in Operator with Empty Array

This repository demonstrates an uncommon error encountered when using the `$in` operator in MongoDB queries with an empty array.  The issue is that using `$in: []` returns no results, regardless of whether the field exists or not.  This is unexpected behaviour compared to using the `$exists` operator.

## Problem

The code uses `$in` with an empty array to check if a field exists.  It's intuitive to assume that this should return all documents, but it actually returns an empty array.

## Solution

The correct approach is to explicitly check for the existence of the field using the `$exists` operator.
