# -*- coding: utf-8 -*-
"""CRCS

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1GyOIKxr-7g0FaIKuRBjmgS-xfPmxbhRR
"""

# import the libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# read csv /content/DummyData.csv
df = pd.read_csv("DummyDataWholeData.csv")
df.head(5)

df.State.value_counts()

# To print no. of samples and attributes
print(df.shape)

# getting the columns of the dataset
columns = list(df.columns)
print(columns)

print(df.isnull().sum())

df['Sector Type'].value_counts()

df.District.value_counts()

