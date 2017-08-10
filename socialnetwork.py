import turtle
import math
class User:
    def __init__(self,user_name,user_id):
        self.user_name = user_name
        self.friends = []
        self.user_id = user_id
    def getUsername(self):
        return self.user_name
    def addfriends(self,friends):
        self.friends.append(friends)
    def getFriends(self):
        return self.friends
    def getUserid(self):
        return self.user_id

class Network:s
    # Define the fields and methods for your object here.
    def __init__(self,user_name):
        self.users = []
        self.user_name = user_name
    def num_users(self):
        return len(self.users)
    def getUsername(self):
            return self.user_name
    def addUsers(self,user_name):
        for user_name in self.users:
            if user_name == self.getUsername():
                print("Sorry, that name is taken. Try again.")
                return
        user_id = len(self.users)
        self.users.append(User(username, user_id))
        return self.users


def main():
    # Define the program flow for your user interface here.
    myNetwork = Network()
    mica = User("mica",1)
    meghan = User("meghan",2)
    friends = ["meghan","rose","nick","leyla","lena","CT"]
    myNetwork.addUsers(mica)
    myNetwork.addUsers(meghan)



# Runs your program.
if __name__ == '__main__':
    main()
