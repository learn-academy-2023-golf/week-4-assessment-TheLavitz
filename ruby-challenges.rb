# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# Define a method called even_odd
# Input: Number
# Output: String
# Use if condtional and modulo to determine if a number is odd or even
# Use string interpolation to return a string containing the input and stating whether it's even or odd

def even_odd num
    if num % 2 == 0
        "#{num} is even."
    else
        "#{num} is odd."
    end
end

p even_odd reposts1
p even_odd reposts2
p even_odd reposts3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# Define a method called no_vowels
# Input: string
# Output: string
# Use .delete! to remove the vowels from the string

def no_vowels str
    str.delete! "aeiou"
end

p no_vowels beatles_album1
p no_vowels beatles_album2
p no_vowels beatles_album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# Define a method called is_palindrome
# Input: string
# Output: string
# Use if conditional, .downcase, and .reverse to determine if provided string is a palindrome
# Use string interpolation to return the input and a string stating whether or not the input is palindrome

def is_palindrome str
    if str.downcase.reverse == str.downcase
        "#{str} is a palindrome."
    else
        "#{str} is not a palindrome."
    end
end

p is_palindrome palindrome_test_case1
p is_palindrome palindrome_test_case2
p is_palindrome palindrome_test_case3