---
to: <%= path %>/<%= key %>/index.test.ts
sh: "code <%= path %>/<%= key %>/index.test.ts"
---
<%
  RecoilType = h.inflection.camelize(recoilType)
  isGetter = getterSetter === "getter" || getterSetter === "both"
  isSetter = getterSetter === "setter" || getterSetter === "both"
%>
import { act, renderHook } from "@testing-library/react"
import { RecoilRoot } from "recoil"
<% if (!isSetter) { %>
import { useSetRecoilState } from "recoil"
<% } else if (!isGetter) { %>
import { useRecoilValue } from "recoil"
<% } %>

import key from "./key"

import {
  <% if (isSetter) { %> useSet<%= Name %>, <% } %>
  <% if (isGetter) { %> use<%= Name %>, <% } %>
  <% if (!(isGetter && isSetter)) { %> <%= name %><%= RecoilType %> <% } %>
} from "."

function useMockHooks() {
  return {
    <% if (isGetter) { %>
    ...use<%= Name %>(),
    <% } else  { %>
    <%= name %>: useRecoilValue(<%= name %><%= RecoilType %>),
    <% } %>
    <% if (isSetter) { %>
    ...useSet<%= Name %>(),
    <% } else  { %>
    set<%= Name %>: useSetRecoilState(<%= name %><%= RecoilType %>),
    <% } %>
  }
}

describe(key, () => {
  it("set value", () => {
    const { result } = renderHook(useMockHooks, { wrapper: RecoilRoot })
    act(() => {
      result.current.set<%= Name %>("foo")
    })
    expect(result.current.<%= name %>).toBe("foo")
  })
})

