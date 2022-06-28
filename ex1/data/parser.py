import json
import csv
dic = []
#colecao pagamentos
meses = ["Fracao","Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set" ,"Out","Nov","Dez"]

with open('pagamentos.csv') as pag:
    pr = csv.reader(pag,delimiter=',')
    for row in pr:
        dic.append(row) 
        #print(', '.join((row)))
print(dic)
newd=[]
for j in range(len(dic)):
    newd.append({})
    for i in range(len(dic[j])):
        print(dic[j])
        print(i)
        if dic[j][i]=='':
            dic[j][i]=0
        elif i!= 0:
            dic[j][i]=1
        newd[j][meses[i]] = dic[j][i]


fj = open("pagamentos.json","w")
js = json.dump(newd,fj, indent=2,ensure_ascii=False)


#....
dic = []
vs = ["Numero","Tipo","Data","Valor","entidade","Descricao"]
with open('receitas.csv') as pag:
    pr = csv.reader(pag,delimiter=',')
    for row in pr:
        dic.append(row) 
        #print(', '.join((row)))
print(dic)
newd=[]
for j in range(len(dic)):
    newd.append({})
    for i in range(len(dic[j])):
        if i ==3:
            newd[j][vs[i]] = float(dic[j][i])
        else:
            newd[j][vs[i]] = dic[j][i]

fj = open("movimentos.json","w")
js = json.dump(newd,fj, indent=2,ensure_ascii=False)


#....
dic = []
vs = ["Fracao","Permilagem","Mensalidade"]
with open('fracoes.csv') as pag:
    pr = csv.reader(pag,delimiter=',')
    for row in pr:
        dic.append(row) 
        #print(', '.join((row)))
print(dic)
newd=[]
for j in range(len(dic)):
    newd.append({})
    for i in range(len(dic[j])):
        if not i==0:
            newd[j][vs[i]] = float(dic[j][i])
        else:
            newd[j][vs[i]] = dic[j][i]

fj = open("fracoes.json","w")
js = json.dump(newd,fj, indent=2,ensure_ascii=False)

print(js)
