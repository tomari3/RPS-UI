# Rock Paper Scissors using JavaScript to be played from the Console
    
    In this project I'll implement what I've learned from The Odin Project course on JavaScript Fundamentals section on Problem Solving and Algorithmic Thinking. I'll show my thought process and my git, vscode and coding skills, which I hope will improve from project to project.
    Obviously this is a very basic project and by no means I am to say that this achieves something spectacular. It is thou, goes to show my ability to learn quickly and problem solve as I've started this course last week.

    # Stage One : The Problem.
    The game of Rock Paper & Scissors (RPS) is simple enough. There are two players and and three available actions for each player to choose from. Both players apply their choices at the same time and the outcome of the match differs but has three options. 
    1. Player One wins. 
    2. Players Two wins and 
    3. Its a tie.
    How does the out come determined? Here, even explaining it in simple English already sounds a bit like code, which is great. for demonstration lets assume left is Player One and right is Player Two :
    if Rock vs Paper => Player One wins.
    if Paper vs Scissors => Player One wins.
    if Scissors vs Paper => Player One wins.

    Now, i am going to complicate thing a bit just for the sake of showing all the possible variations.

    Rock . Rock #Tie
    Rock . Paper #1
    Rock . Scissors #2

    Paper . Paper #Tie
    Paper . Scissors #1
    Paper . Rock #2

    Scissors . Scissors #Tie
    Scissors . Rock #1
    Scissors . Paper #2

    We have redundancies here which i think could be saved, but I'll check that after my first draft is finished.

    So basically we want a program that take input R, P or S and return a random R, P or S from the computer. Then compares the two and return the result and keeps score (because why not). That does'nt sound so bad.

    # Stage Two : Pseudo-code (or any other set of instructions in 'not code')
    Get user input of RPS
    Generate computer output of random RPS
    Compare the user's input with the computer's output
    If 'Tie', repeat.
    Return the result of the match
    Add score
    End

    # Stage Three : Divide and Conquer (What do I know?)
    I can get user input with the Prompt, but i'd like to limit the user to the relevant options of R, P, S and avoid Parsing and errors.
    If I had UI I'd give them buttons, but I don't. After google search, it require jQuery or different libraries and techniques I am not familiar with so, oh well.
        # input
        1. get input
        2. check if input is correct.

    From here I feel comfortable to dive into the code, maybe I'll come back here again.

    # Stage Four : Conclusions
    I finished the task without going back here, it took me about 2 hours.
    I started using the Pseudo-code as a template and expanding it further into smaller sections, not everything came together so I started to code what I know. After playing with functions and making mistakes I had all my pieces done but apart and putting the together wasn't and easy task. It required to take a part formerly "complete" pieces of the puzzle and rearrange them. At the end I've got my desired result, I have a playable game with parsing, counting and loops. I'm sure there are better ways to do what I've and I am very excited to learn them in the future. If by any change you too are just starting to programming, I wish you a lot of luck and I hope you enjoyed and learned from my process.


    