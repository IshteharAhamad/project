from tkinter import *
from tkinter import messagebox
#from button_hover import hover
win=Tk()
win.config(bg='gray')
win.title("Log In Screen ..")
win.geometry('500x500')
l1=Label(win,text='Username:',font=('Sylfaen',18),bg='#34495E',fg='white')
l2=Label(win,text='Password :',font=('Sylfaen',18),bg='#34495E',fg='white')
l1.grid(row=0,column=0,padx=5,pady=5)
l2.grid(row=1,column=0,padx=5,pady=5)
username= StringVar()
password= StringVar()
t1=Entry(win,textvariable=username,font=('Monotype Corsiva',18))
t2=Entry(win,textvariable=password,font=('Monotype Corsiva',18),show='*')
t1.grid(row=0,column=1)
t2.grid(row=1,column=1)
def login():
    if username.get()=="admin" and password.get()=="admin":
        messagebox.showinfo(title='login stats',message='You have logged In..')
        print("Hello ! this is admin page")
    else:
        messagebox.showerror(title='login error',message='Username or password is incorrect.')
b1=Button(win,command=login,text='Log In',font=(16),fg='blue')
def cancel():
    status=messagebox.askyesno(title='Question ?',message='Do you want to close window ?')
    if status==True:
        win.destroy()
    else:
        messagebox.showwarning(title='Warning message !',message='please Log In Again !!')
b2=Button(win,command=cancel,text='cancel',font=(16),fg='blue')
b1.grid(row=2,column=1,sticky=W)
b2.grid(row=2,column=1,sticky=E)
win.mainloop()

