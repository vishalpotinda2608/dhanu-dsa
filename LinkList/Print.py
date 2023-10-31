class Person:
    def __init__(self,name,age):
        self.name=name
        self.age=age

    def __str__(self) -> str:
        return f"Person {self.name}-{self.age}"


new_person=Person("Vishal",25)
print(new_person)