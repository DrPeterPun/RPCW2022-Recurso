import json
import csv
dic = {}
#colecao pagamentos
meses = ["Fracao","Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set" ,"Out","Nov","Dez"]
with open('pagamentos.csv') as pag:
    pr = csv.reader(pag,delimiter=',')
    for row in pr:

        dic[row[0]] = row[1:]
        #print(', '.join((row)))
newd={}
for a,b in dic.items():
    newd[a] = {}
    for i in range(len(b)):
        print(dic[a])
        print(i)
        if dic[a][i]=='':
            dic[a][i]="0"
        newd[a][meses[i]] = dic[a][i]

jlist =[]
for a,b in newd.items():
    jlist.append({a:b})

fj = open("pagamentos.json","w")
js = json.dump(jlist,fj, indent=2,ensure_ascii=False)


#....
dic = {}
vs = ["Numero","Tipo","Data","Valor","entidade","Descricao"]
with open('receitas.csv') as rec:
    rr = csv.reader(rec,delimiter=',')
    for row in rr:

        dic[row[0]] = row
        #print(', '.join((row)))
newd={}
for a,b in dic.items():
    newd[a] = {}
    for i in range(len(b)):
        print(dic[a])
        print(i)
        if dic[a][i]=='':
            dic[a][i]="0"
        newd[a][vs[i]] = dic[a][i]

jlist = []
for a,b in newd.items():
    jlist.append({a:b})

fj = open("movimentos.json","w")
js = json.dump(jlist,fj, indent=2,ensure_ascii=False)

#....
dic = {}
vs = ["Fracao","Permilagem","Mensalidade"]
with open('fracoes.csv') as rec:
    rr = csv.reader(rec,delimiter=',')
    for row in rr:

        dic[row[0]] = row[1:]
        #print(', '.join((row)))
newd={}
for a,b in dic.items():
    newd[a] = {}
    for i in range(len(b)):
        print(dic[a])
        print(i)
        if dic[a][i]=='':
            dic[a][i]="0"
        newd[a][vs[i]] = dic[a][i]

jlist = []
for a,b in newd.items():
    jlist.append({a:b})

fj = open("fracoes.json","w")
js = json.dump(jlist,fj, indent=2,ensure_ascii=False)



print(js)
